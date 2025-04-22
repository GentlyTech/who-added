// This script is meant to be run in the Spotify DevTools console.

const EXCLUDED_METHODS = [
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocalString",
  "toString",
  "valueOf"
]

const MAX_PROPERTIES = 1024; // Replace objects with more than this number of keys with an empty object
const MAX_DEPTH = 4;

const ObjectMapper = {
  /**
   * The actual function that does the exploring
   * @param {any?} obj 
   * @param {boolean} includePrivate 
   * @param {number} depth 
   */
  _MapObjectToInterfaceRecursive: function (obj, includePrivate, depth) {
    const result = {};

    if (obj == null) return result;

    const properties = Object.getOwnPropertyNames(obj);

    if (properties.length > MAX_PROPERTIES) return result;

    const proto = Object.getPrototypeOf(obj);

    for (const property of properties) {
      try {
        const propertyType = typeof(obj[property]);

        if (!includePrivate && (property.startsWith("_") || property in EXCLUDED_METHODS)) continue; // skip internal properties if not explicitly specified
  
        if (propertyType == "object" && depth < MAX_DEPTH) {
          result[property] = ObjectMapper._MapObjectToInterfaceRecursive(obj[property], includePrivate, depth + 1);
          continue;
        }

        if (propertyType == "function") {
          /** @type {number} */
          const numParams = obj[property].length;
          const params = [];
          for (let i = 0; i < numParams; i++) {
            params.push(`p${i}`);
          }
          result[property] = `(${params.join(", ")}) => any`;
          continue;
        }
  
        result[property] = propertyType;
      }
      catch {} // Prevents TypeError, not the best way to handle this
    }

    if (proto != null && depth < MAX_DEPTH) {
      return { ...result, ...ObjectMapper._MapObjectToInterfaceRecursive(proto, includePrivate, depth + 1) };
    }

    return result;
  },
  /**
   * Maps a given object's properties and methods to their corresponding type and returns a new object representing an "interface" of the original object.
   * 
   * @param {any?} obj the object to generate an interface of
   * @param {boolean?} includePrivate whether or not to include private/internal properties
   * @returns {any}
   */
  MapObjectToInterface: function (obj, includePrivate) {
    return ObjectMapper._MapObjectToInterfaceRecursive(obj, includePrivate, 0);
  }
};

ObjectMapper.MapObjectToInterface(); // Pass an object in here
