declare namespace Spicetify {
  interface Platform {
    ReduxStore: {
      cleanActions: () => any;
      triggerActions: () => any;
      storeAction: () => any;
    };
    version: string;
    container: string;
    operatingSystem: string;
    isDeveloperMode: boolean;
    isVideoSupported: boolean;
    isWebPSupported: boolean;
    enableCastConnect: boolean;
    initialUser: {
      type: string;
      uri: string;
      username: string;
      displayName: string;
      avatarBackgroundColor: number;
      images: {};
    };
    initialProductState: any;
    username: string;
    ServiceWorkerMessenger: {
      then: (p0?, p1?) => any;
      catch: (p0?) => any;
      finally: (p0?) => any;
    };
    Registry: {
      registerValue: (p0?, p1?) => any;
      registerFactory: (p0?, p1?) => any;
      registerImpl: (p0?, p1?) => any;
      resolve: (p0?) => any;
      resolveNoThrow: (p0?) => any;
      resolveImpl: (p0?, p1?) => any;
      wrap: (p0?, p1?) => any;
      wrapImpl: (p0?, p1?, p2?) => any;
      getDependencyTree: () => any;
    };
    Session: {
      accessToken: string;
      accessTokenExpirationTimestampMs: number;
      isAnonymous: boolean;
      market: string;
      locale: string;
      valid: boolean;
    };
    Transport: {
      authenticate: () => any;
      isConnected: () => any;
      isAuthenticated: () => any;
      isReconnecting: () => any;
      isOnline: () => any;
      connect: () => any;
      disconnect: () => any;
      forceDisconnect: () => any;
      forceTokenRefresh: () => any;
      getInitTime: () => any;
      getEndpoints: () => any;
      getLastToken: () => any;
      toPublic: (p0?) => any;
      hasOwnerRef: (p0?) => any;
      appendTokenQuery: (p0?) => any;
      appendLastTokenQuery: (p0?) => any;
      matchMessages: (p0?, p1?, p2?) => any;
      unmatchMessages: (p0?, p1?, p2?) => any;
      handlePushRequests: (p0?, p1?, p2?) => any;
      unhandlePushRequests: (p0?, p1?, p2?) => any;
      request: (p0?, p1?) => any;
      addPlugin: (p0?, p1?) => any;
      removePlugin: (p0?) => any;
      hasPlugin: (p0?) => any;
      getPluginAPI: (p0?) => any;
      getConnectionId: () => any;
      removeAllListeners: (p0?) => any;
      createEvent: (p0?, p1?) => any;
      on: (p0?, p1?) => any;
      addListener: (p0?, p1?) => any;
      addListeners: (p0?) => any;
      once: (p0?, p1?) => any;
      removeListener: (p0?, p1?) => any;
      removeListeners: (p0?) => any;
      emit: (p0?, p1?) => any;
      emitSync: (p0?, p1?) => any;
      emitEvent: (p0?) => any;
      emitEventSync: (p0?) => any;
      emitAndWait: (p0?, p1?, p2?) => any;
      emitEventAndWait: (p0?, p1?) => any;
      proxyEmit: (p0?, p1?, p2?) => any;
      proxyEmitSync: (p0?, p1?, p2?) => any;
      proxyEmitAll: (p0?, p1?) => any;
      proxyEmitAllSync: (p0?, p1?) => any;
      onAddListener: (p0?, p1?) => any;
      onRemoveListener: (p0?, p1?) => any;
    };
    EventSender: {
      instanceContexts: {
        context_application_desktop: {
          version_code: number;
          version_string: string;
        };
        context_client_id: {
          value: string;
        };
        context_installation_id: {
          value: string;
        };
        context_device_desktop: {
          device_id: string;
          device_manufacturer: string;
          device_model: string;
          os_version: string;
          platform_type: string;
        };
      };
      uploadingInProgress: boolean;
      transport: {
        authenticate: () => any;
        isConnected: () => any;
        isAuthenticated: () => any;
        isReconnecting: () => any;
        isOnline: () => any;
        connect: () => any;
        disconnect: () => any;
        forceDisconnect: () => any;
        forceTokenRefresh: () => any;
        getInitTime: () => any;
        getEndpoints: () => any;
        getLastToken: () => any;
        toPublic: (p0?) => any;
        hasOwnerRef: (p0?) => any;
        appendTokenQuery: (p0?) => any;
        appendLastTokenQuery: (p0?) => any;
        matchMessages: (p0?, p1?, p2?) => any;
        unmatchMessages: (p0?, p1?, p2?) => any;
        handlePushRequests: (p0?, p1?, p2?) => any;
        unhandlePushRequests: (p0?, p1?, p2?) => any;
        request: (p0?, p1?) => any;
        addPlugin: (p0?, p1?) => any;
        removePlugin: (p0?) => any;
        hasPlugin: (p0?) => any;
        getPluginAPI: (p0?) => any;
        getConnectionId: () => any;
        removeAllListeners: (p0?) => any;
        createEvent: (p0?, p1?) => any;
        on: (p0?, p1?) => any;
        addListener: (p0?, p1?) => any;
        addListeners: (p0?) => any;
        once: (p0?, p1?) => any;
        removeListener: (p0?, p1?) => any;
        removeListeners: (p0?) => any;
        emit: (p0?, p1?) => any;
        emitSync: (p0?, p1?) => any;
        emitEvent: (p0?) => any;
        emitEventSync: (p0?) => any;
        emitAndWait: (p0?, p1?, p2?) => any;
        emitEventAndWait: (p0?, p1?) => any;
        proxyEmit: (p0?, p1?, p2?) => any;
        proxyEmitSync: (p0?, p1?, p2?) => any;
        proxyEmitAll: (p0?, p1?) => any;
        proxyEmitAllSync: (p0?, p1?) => any;
        onAddListener: (p0?, p1?) => any;
        onRemoveListener: (p0?, p1?) => any;
      };
      ownerProvider: () => any;
      uploaders: {
        authorized: {
          upload: (p0?) => any;
          lastUpload: (p0?) => any;
          shouldBackoff: () => any;
        };
        unauthorized: {
          upload: (p0?) => any;
          lastUpload: (p0?) => any;
          shouldBackoff: () => any;
        };
      };
      useOptimizedESS2NA: boolean;
      sendESStats: () => any;
      flush: () => any;
      storageManager: {
        currentTotalSizeForEvents: number;
        currentTotalSizeForDroppedCounters: number;
        maxStorageCapacityForEventsInBytes: number;
        maxStorageCapacityForDroppedCountersInBytes: number;
        storageKeyPrefix: string;
        storage: {
          maxCapacityInBytes: number;
          adapter: {};
          flushStrategy: {
            kind: string;
            interval: number;
          };
          maxCapacityForDroppedInPercentage: number;
        };
        configureMaxStorageCapacity: (p0?) => any;
        setTotalEventStorageSizeAtStartup: () => any;
        setTotalDroppedCountersStorageSizeAtStartup: () => any;
        createStorage: (p0?) => any;
        getItemSizeInBytes: (p0?, p1?) => any;
        canMakeEventsStorageFull: (p0?) => any;
        canMakeDroppedCountersStorageFull: (p0?) => any;
        getOrCreateId: (p0?, p1?) => any;
        updateItemInEventsStorage: (p0?, p1?) => any;
        updateItemInDroppedCountersStorage: (p0?, p1?) => any;
        addItemInEventsStorage: (p0?, p1?) => any;
        addItemInDroppedCountersStorage: (p0?, p1?) => any;
        setItem: (p0?, p1?) => any;
        getItem: (p0?) => any;
        removeItemInEventsStorage: (p0?) => any;
        removeItemInDroppedCountersStorage: (p0?) => any;
        getKeys: () => any;
        clear: () => any;
        setCounterItem: (p0?, p1?) => any;
      };
      droppedEventsTracker: {
        storageManager: {
          currentTotalSizeForEvents: number;
          currentTotalSizeForDroppedCounters: number;
          maxStorageCapacityForEventsInBytes: number;
          maxStorageCapacityForDroppedCountersInBytes: number;
          storageKeyPrefix: string;
          storage: {
            maxCapacityInBytes: number;
            adapter: any;
            flushStrategy: any;
            maxCapacityForDroppedInPercentage: number;
          };
          configureMaxStorageCapacity: (p0?) => any;
          setTotalEventStorageSizeAtStartup: () => any;
          setTotalDroppedCountersStorageSizeAtStartup: () => any;
          createStorage: (p0?) => any;
          getItemSizeInBytes: (p0?, p1?) => any;
          canMakeEventsStorageFull: (p0?) => any;
          canMakeDroppedCountersStorageFull: (p0?) => any;
          getOrCreateId: (p0?, p1?) => any;
          updateItemInEventsStorage: (p0?, p1?) => any;
          updateItemInDroppedCountersStorage: (p0?, p1?) => any;
          addItemInEventsStorage: (p0?, p1?) => any;
          addItemInDroppedCountersStorage: (p0?, p1?) => any;
          setItem: (p0?, p1?) => any;
          getItem: (p0?) => any;
          removeItemInEventsStorage: (p0?) => any;
          removeItemInDroppedCountersStorage: (p0?) => any;
          getKeys: () => any;
          clear: () => any;
          setCounterItem: (p0?, p1?) => any;
        };
        updateDroppedEventCount: (p0?, p1?) => any;
        getDroppedEventCounters: (p0?) => any;
        getDroppedEventsCountersPerSequenceId: (p0?) => any;
        updateReportedEventCounters: (p0?) => any;
      };
      eventsManager: {
        storageManager: {
          currentTotalSizeForEvents: number;
          currentTotalSizeForDroppedCounters: number;
          maxStorageCapacityForEventsInBytes: number;
          maxStorageCapacityForDroppedCountersInBytes: number;
          storageKeyPrefix: string;
          storage: {
            maxCapacityInBytes: number;
            adapter: any;
            flushStrategy: any;
            maxCapacityForDroppedInPercentage: number;
          };
          configureMaxStorageCapacity: (p0?) => any;
          setTotalEventStorageSizeAtStartup: () => any;
          setTotalDroppedCountersStorageSizeAtStartup: () => any;
          createStorage: (p0?) => any;
          getItemSizeInBytes: (p0?, p1?) => any;
          canMakeEventsStorageFull: (p0?) => any;
          canMakeDroppedCountersStorageFull: (p0?) => any;
          getOrCreateId: (p0?, p1?) => any;
          updateItemInEventsStorage: (p0?, p1?) => any;
          updateItemInDroppedCountersStorage: (p0?, p1?) => any;
          addItemInEventsStorage: (p0?, p1?) => any;
          addItemInDroppedCountersStorage: (p0?, p1?) => any;
          setItem: (p0?, p1?) => any;
          getItem: (p0?) => any;
          removeItemInEventsStorage: (p0?) => any;
          removeItemInDroppedCountersStorage: (p0?) => any;
          getKeys: () => any;
          clear: () => any;
          setCounterItem: (p0?, p1?) => any;
        };
        getEvent: (p0?) => any;
        getEventKey: (p0?, p1?) => any;
        getGlobalSequenceNumberFromEventKey: (p0?) => any;
        addEvent: (p0?, p1?) => any;
        getEventsKeys: (p0?) => any;
        getEvents: (p0?) => any;
        getEventsKeysPerSequenceId: (p0?) => any;
        removeEvents: (p0?) => any;
      };
      installationId: string;
      sequenceIdProvider: {
        installationId: string;
        getIdHash: (p0?) => any;
        getId: (p0?, p1?) => any;
      };
      sequenceNumberProvider: {
        storageManager: {
          currentTotalSizeForEvents: number;
          currentTotalSizeForDroppedCounters: number;
          maxStorageCapacityForEventsInBytes: number;
          maxStorageCapacityForDroppedCountersInBytes: number;
          storageKeyPrefix: string;
          storage: {
            maxCapacityInBytes: number;
            adapter: any;
            flushStrategy: any;
            maxCapacityForDroppedInPercentage: number;
          };
          configureMaxStorageCapacity: (p0?) => any;
          setTotalEventStorageSizeAtStartup: () => any;
          setTotalDroppedCountersStorageSizeAtStartup: () => any;
          createStorage: (p0?) => any;
          getItemSizeInBytes: (p0?, p1?) => any;
          canMakeEventsStorageFull: (p0?) => any;
          canMakeDroppedCountersStorageFull: (p0?) => any;
          getOrCreateId: (p0?, p1?) => any;
          updateItemInEventsStorage: (p0?, p1?) => any;
          updateItemInDroppedCountersStorage: (p0?, p1?) => any;
          addItemInEventsStorage: (p0?, p1?) => any;
          addItemInDroppedCountersStorage: (p0?, p1?) => any;
          setItem: (p0?, p1?) => any;
          getItem: (p0?) => any;
          removeItemInEventsStorage: (p0?) => any;
          removeItemInDroppedCountersStorage: (p0?) => any;
          getKeys: () => any;
          clear: () => any;
          setCounterItem: (p0?, p1?) => any;
        };
        commitSequenceNumber: (p0?, p1?) => any;
        getNextSequenceNumber: (p0?) => any;
        generateNextSequenceNumber: (p0?) => any;
        generateNextEventSequenceNumber: (p0?, p1?) => any;
        generateNextGlobalSequenceNumber: () => any;
        getEventsSequenceNumbers: (p0?) => any;
        getSequenceNumbersPerSequenceId: (p0?) => any;
      };
      statsProvider: {
        getInitialESSData: (p0?) => any;
        addEventsToESSData: (p0?, p1?) => any;
        addLossStatsData: (p0?) => any;
        addDroppedEventsCountersData: (p0?, p1?) => any;
        addDroppedEventsCounters: (p0?, p1?, p2?) => any;
        provideEventSenderStats: (p0?, p1?, p2?) => any;
      };
      initSendingEvents: () => any;
      initializeContexts: (p0?) => any;
      buildEvent: (p0?, p1?) => any;
      getSpecificContext: (p0?) => any;
      setupInstallationId: () => any;
      getStorageId: () => any;
      onBeforeDisconnect: () => any;
      lastFlush: () => any;
      sendEvents: (p0?) => any;
      sendESS2NAWithOptimization: (p0?, p1?, p2?, p3?) => any;
      commitAndUploadESStats: (p0?, p1?, p2?) => any;
      onSuccessfullySentESStats: (p0?) => any;
      sendToGabito: (p0?, p1?) => any;
      getEvents: (p0?) => any;
      storeEvent: (p0?, p1?) => any;
      validateEventData: (p0?, p1?, p2?) => any;
      send: (p0?) => any;
      hasContext: () => any;
      destroy: () => any;
      getStorageType: () => any;
      isUsingESS2NAOptimization: () => any;
      getVersion: () => any;
      finalFlush: () => any;
      createEvent: (p0?, p1?) => any;
      on: (p0?, p1?) => any;
      addListener: (p0?, p1?) => any;
      addListeners: (p0?) => any;
      once: (p0?, p1?) => any;
      removeListener: (p0?, p1?) => any;
      removeListeners: (p0?) => any;
      removeAllListeners: (p0?) => any;
      emit: (p0?, p1?) => any;
      emitSync: (p0?, p1?) => any;
      emitEvent: (p0?) => any;
      emitEventSync: (p0?) => any;
      emitAndWait: (p0?, p1?, p2?) => any;
      emitEventAndWait: (p0?, p1?) => any;
      proxyEmit: (p0?, p1?, p2?) => any;
      proxyEmitSync: (p0?, p1?, p2?) => any;
      proxyEmitAll: (p0?, p1?) => any;
      proxyEmitAllSync: (p0?, p1?) => any;
      onAddListener: (p0?, p1?) => any;
      onRemoveListener: (p0?, p1?) => any;
    };
    Translations: {};
    FeatureFlags: {
      enableShows: boolean;
    };
    History: {
      action: string;
      location: {
        pathname: string;
        search: string;
        hash: string;
        state: {
          navigationalRoot: string;
        };
        key: string;
      };
      index: number;
      createHref: (p0?) => any;
      replace: (p0?, p1?) => any;
      go: (p0?) => any;
      goBack: () => any;
      goForward: () => any;
      canGo: (p0?) => any;
      block: () => any;
      listen: (p0?) => any;
    };
    AdManagers: {
      config: {
        getAdsSlotConfig: () => any;
      };
      audio: {
        enabled: boolean;
        subscription: {};
        onAdMessage: (p0?) => any;
        audioApi: {
          postEvent: (p0?) => any;
        };
        getContextAdInfo: () => any;
        inStreamApi: {
          enabled: boolean;
          inStreamAdsSubscription: {};
          inStreamAd: {};
          onAdMessageCallbacks: {};
          adsCoreConnector: {};
          enable: (p0?) => any;
          disable: () => any;
          subscribeToInStreamAds: () => any;
          getInStreamAd: () => any;
          onInStreamAdMessage: (p0?) => any;
          skipToNext: () => any;
        };
        enable: (p0?) => any;
        disable: () => any;
        logClick: (p0?, p1?) => any;
        getEnabled: () => any;
      };
      vto: {
        manager: {
          enabled: boolean;
          active: boolean;
          subscription: {};
          fireImpressionOnStart: boolean;
          onAdMessage: (p0?) => any;
          focusState: {
            listeners: any;
          };
          videoTakeoverApi: {
            esperantoConnector: any;
          };
          inStreamApi: {
            enabled: boolean;
            inStreamAdsSubscription: any;
            inStreamAd: any;
            onAdMessageCallbacks: any;
            adsCoreConnector: any;
          };
          enable: (p0?) => any;
          disable: () => any;
          logEvent: (p0?, p1?, p2?) => any;
          onRender: () => any;
          onFocusChanged: (p0?) => any;
          parseInfo: (p0?) => any;
          resetState: () => any;
          handleApplicationGainedFocus: () => any;
          handleApplicationLostFocus: () => any;
          log: (p0?, p1?, p2?) => any;
          onCreated: (p0?) => any;
          onEnded: (p0?, p1?) => any;
          onStarted: (p0?) => any;
          onStateUpdate: (p0?) => any;
          onReady: () => any;
          getEnabled: () => any;
        };
        factories: {};
      };
      hpto: {
        timeOfLastViewUpdate: number;
        refreshCallback: () => any;
        visibilityState: string;
        createTrackingPixelImage: (p0?, p1?) => any;
        onVisibilityChanged: (p0?) => any;
        log: (p0?) => any;
        logAdEventError: (p0?) => any;
        mapData: (p0?) => any;
        handleTrackingUrl: (p0?) => any;
        hptoApi: {
          adsCoreConnector: {};
          nativeHptoApi: {
            mapEpisode: (p0?) => any;
            mapTrack: (p0?) => any;
            mapDefaultData: (p0?) => any;
            spotifyTransport: any;
            endpoints: any;
            imageSelection: () => any;
          };
          esperantoPreviewParser: {};
          eventSender: {
            instanceContexts: any;
            uploadingInProgress: boolean;
            transport: any;
            ownerProvider: () => any;
            uploaders: any;
            useOptimizedESS2NA: boolean;
            sendESStats: () => any;
            flush: () => any;
            storageManager: any;
            droppedEventsTracker: any;
            eventsManager: any;
            installationId: string;
            sequenceIdProvider: any;
            sequenceNumberProvider: any;
            statsProvider: any;
          };
          getSlot: (p0?) => any;
          logEvent: (p0?) => any;
          subscribeToPreview: (p0?) => any;
          getAlgoPlaylistInfo: (p0?) => any;
          getAlbum: (p0?) => any;
          getArtist: (p0?) => any;
          getEpisode: (p0?) => any;
          getPlaylist: (p0?) => any;
          getShow: (p0?) => any;
          getTrack: (p0?) => any;
        };
        focusState: {
          listeners: {};
          addFocusListener: (p0?) => any;
          removeFocusListener: (p0?) => any;
          removeAllFocusListeners: () => any;
          hasFocus: () => any;
        };
        visibilityObserver: {
          onObservation: (p0?) => any;
          currentState: string;
          intersectionObserver: {};
          observe: (p0?, p1?) => any;
          disconnect: () => any;
        };
        offlineObserver: {
          isOnline: boolean;
          getOnlineStatus: () => any;
        };
        appStartupId: string;
        trackingPixelDiv: {};
        subscribeToPreview: (p0?) => any;
        onRefresh: (p0?) => any;
        fetchTemplate: () => any;
        fetchCreative: (p0?) => any;
        logEvent: (p0?) => any;
        logErrorEvent: (p0?) => any;
        trackPixelClicked: () => any;
        trackPixelViewed: () => any;
        logViewed: () => any;
        maybeTriggerRefresh: () => any;
        viewRendered: (p0?) => any;
        viewDestroyed: () => any;
        onFocusChanged: (p0?) => any;
        maybeModifyUrl: (p0?, p1?) => any;
        createTrackingList: (p0?) => any;
        getNativeData: (p0?, p1?) => any;
      };
      billboard: {
        enabled: boolean;
        activating: boolean;
        viewedTimestamp: number;
        onActivity: (p0?) => any;
        onAdMessage: (p0?) => any;
        focusMinimize: () => any;
        finish: () => any;
        triggerAutoMinimizeIfPossible: () => any;
        displayBillboard: () => any;
        billboardApi: {
          adsCoreConnector: {};
          createSlot: (p0?, p1?) => any;
          getSlotConfiguration: (p0?, p1?) => any;
          patchTargeting: (p0?, p1?) => any;
          postEvent: (p0?, p1?, p2?) => any;
          postToSlot: (p0?, p1?) => any;
          subscribeToSlotType: (p0?, p1?) => any;
          triggerSlotClearAll: (p0?) => any;
        };
        focusState: {
          listeners: {};
          addFocusListener: (p0?) => any;
          removeFocusListener: (p0?) => any;
          removeAllFocusListeners: () => any;
          hasFocus: () => any;
        };
        enable: (p0?) => any;
        disable: () => any;
        minimize: () => any;
        adClick: () => any;
        onRender: () => any;
        onError: () => any;
        onFinish: () => any;
        onFocusChanged: (p0?) => any;
        handleDiscard: () => any;
        handlePreview: (p0?) => any;
        isPreviewServiceAd: (p0?) => any;
        resetState: () => any;
        handleApplicationGainedFocus: () => any;
        handleApplicationLostFocus: () => any;
        getFocusTimeoutMs: () => any;
        logEvent: (p0?) => any;
        clearSlot: () => any;
        mapBillboardData: (p0?) => any;
      };
      leaderboard: {
        fetching: boolean;
        enabled: boolean;
        currentAd: {
          creativeId: {};
          lineItemId: {};
          ad: {};
        };
        handleLeaderboardMessage: (p0?) => any;
        onAdSlotEvent: (p0?) => any;
        appStartupId: string;
        adPlaybackId: {};
        frameSrc: string;
        focusState: {
          listeners: {};
          addFocusListener: (p0?) => any;
          removeFocusListener: (p0?) => any;
          removeAllFocusListeners: () => any;
          hasFocus: () => any;
        };
        leaderboardApi: {
          adsCoreConnector: {};
          subscribeToSlotType: (p0?, p1?) => any;
          createAndEnableSlot: (p0?) => any;
          getSlot: (p0?) => any;
          getConfig: () => any;
          normalizeConfig: (p0?) => any;
          coerceDisplayTimeIntervalMs: (p0?) => any;
        };
        refreshDecisioner: {
          viewTimer: number;
          lastOnlineStatus: boolean;
          focusState: {
            listeners: any;
          };
          delegate: {
            fetching: boolean;
            enabled: boolean;
            currentAd: any;
            handleLeaderboardMessage: (p0?) => any;
            onAdSlotEvent: (p0?) => any;
            appStartupId: string;
            adPlaybackId: any;
            frameSrc: string;
            focusState: any;
            leaderboardApi: any;
            refreshDecisioner: any;
            leaderboardWrapper: any;
            eventSender: any;
            history: any;
            offlineObserver: any;
          };
          setRefreshDelegate: (p0?) => any;
          onViewLoaded: () => any;
          onViewUnloaded: () => any;
          onLeaderboardEnabled: () => any;
          onLeaderboardDisabled: () => any;
          onNavigationChanged: () => any;
          onlineStateChanged: (p0?) => any;
          onFocusChanged: (p0?) => any;
          updateViewTimer: () => any;
          isPastViewThreshold: () => any;
          notifyRefreshIfPossible: () => any;
          startRefreshTimer: () => any;
          triggerRefresh: () => any;
        };
        leaderboardWrapper: {};
        eventSender: {
          instanceContexts: {
            context_application_desktop: any;
            context_client_id: any;
            context_installation_id: any;
            context_device_desktop: any;
          };
          uploadingInProgress: boolean;
          transport: {
            authenticate: () => any;
          };
          ownerProvider: () => any;
          uploaders: {
            authorized: any;
            unauthorized: any;
          };
          useOptimizedESS2NA: boolean;
          sendESStats: () => any;
          flush: () => any;
          storageManager: {
            currentTotalSizeForEvents: number;
            currentTotalSizeForDroppedCounters: number;
            maxStorageCapacityForEventsInBytes: number;
            maxStorageCapacityForDroppedCountersInBytes: number;
            storageKeyPrefix: string;
            storage: any;
            configureMaxStorageCapacity: (p0?) => any;
            setTotalEventStorageSizeAtStartup: () => any;
            setTotalDroppedCountersStorageSizeAtStartup: () => any;
          };
          droppedEventsTracker: {
            storageManager: any;
          };
          eventsManager: {
            storageManager: any;
          };
          installationId: string;
          sequenceIdProvider: {
            installationId: string;
          };
          sequenceNumberProvider: {
            storageManager: any;
          };
          statsProvider: {};
          initSendingEvents: () => any;
          initializeContexts: (p0?) => any;
          buildEvent: (p0?, p1?) => any;
          getSpecificContext: (p0?) => any;
          setupInstallationId: () => any;
          getStorageId: () => any;
          onBeforeDisconnect: () => any;
          lastFlush: () => any;
          sendEvents: (p0?) => any;
          sendESS2NAWithOptimization: (p0?, p1?, p2?, p3?) => any;
          commitAndUploadESStats: (p0?, p1?, p2?) => any;
          onSuccessfullySentESStats: (p0?) => any;
          sendToGabito: (p0?, p1?) => any;
          getEvents: (p0?) => any;
          storeEvent: (p0?, p1?) => any;
          validateEventData: (p0?, p1?, p2?) => any;
          send: (p0?) => any;
          hasContext: () => any;
          destroy: () => any;
          getStorageType: () => any;
          isUsingESS2NAOptimization: () => any;
          getVersion: () => any;
          finalFlush: () => any;
        };
        history: {
          action: string;
          location: {
            pathname: string;
            search: string;
            hash: string;
            state: any;
            key: string;
          };
          index: number;
          createHref: (p0?) => any;
          replace: (p0?, p1?) => any;
          go: (p0?) => any;
          goBack: () => any;
          goForward: () => any;
          canGo: (p0?) => any;
          block: () => any;
          listen: (p0?) => any;
        };
        offlineObserver: {
          isOnline: boolean;
          getOnlineStatus: () => any;
        };
        enableLeaderboard: () => any;
        setLeaderboardElement: (p0?) => any;
        onNavigationChanged: () => any;
        enableLeaderboardMessageHandler: () => any;
        disableLeaderboardMessageHandler: () => any;
        logLeaderboardEvent: (p0?) => any;
        requestConfig: () => any;
        requestSlot: (p0?) => any;
        fetchAndDisplayLeaderboard: () => any;
        adToLeaderboard: (p0?) => any;
        isPreviewServiceAd: (p0?) => any;
        renderLeaderboard: (p0?, p1?, p2?) => any;
        adFrameLoaded: (p0?, p1?) => any;
        disableLeaderboard: () => any;
        handleBadLeaderboard: () => any;
        onFocusChanged: (p0?) => any;
        refreshLeaderboard: () => any;
        setCurrentAd: (p0?) => any;
        getCurrentAd: () => any;
        clearCurrentAd: () => any;
      };
      sponsoredPlaylist: {
        enabled: boolean;
        sponsoredPlaylistApi: {
          eventSender: {
            instanceContexts: any;
            uploadingInProgress: boolean;
            transport: any;
            ownerProvider: () => any;
            uploaders: any;
            useOptimizedESS2NA: boolean;
            sendESStats: () => any;
            flush: () => any;
            storageManager: any;
            droppedEventsTracker: any;
            eventsManager: any;
            installationId: string;
            sequenceIdProvider: any;
            sequenceNumberProvider: any;
            statsProvider: any;
          };
          adsCoreConnector: {};
          getSponsoredUris: () => any;
          getSponsorshipAd: (p0?) => any;
          subscribeToPreview: (p0?) => any;
          logEvent: (p0?) => any;
        };
        enable: (p0?) => any;
        disable: () => any;
        requestSponsoredPlaylists: () => any;
        requestSponsoredPlaylistAd: (p0?) => any;
        logEvent: (p0?) => any;
      };
      home: {
        logger: {
          eventSender: {
            instanceContexts: any;
            uploadingInProgress: boolean;
            transport: any;
            ownerProvider: () => any;
            uploaders: any;
            useOptimizedESS2NA: boolean;
            sendESStats: () => any;
            flush: () => any;
            storageManager: any;
            droppedEventsTracker: any;
            eventsManager: any;
            installationId: string;
            sequenceIdProvider: any;
            sequenceNumberProvider: any;
            statsProvider: any;
          };
          appStartupId: string;
          fireTrackingEvent: (p0?) => any;
          log: (p0?, p1?, p2?) => any;
        };
        fetchHomeAd: () => any;
        enableLegacyHptoContainerLoader: boolean;
      };
      survey: {
        logger: {
          eventSender: {
            instanceContexts: any;
            uploadingInProgress: boolean;
            transport: any;
            ownerProvider: () => any;
            uploaders: any;
            useOptimizedESS2NA: boolean;
            sendESStats: () => any;
            flush: () => any;
            storageManager: any;
            droppedEventsTracker: any;
            eventsManager: any;
            installationId: string;
            sequenceIdProvider: any;
            sequenceNumberProvider: any;
            statsProvider: any;
          };
          inStreamApi: {
            enabled: boolean;
            inStreamAdsSubscription: any;
            inStreamAd: any;
            onAdMessageCallbacks: any;
            adsCoreConnector: any;
          };
          getAdData: () => any;
          logAdEvent: (p0?) => any;
          logSurveyAdEventWithAd: (p0?) => any;
          logSurveyAdEventWithoutAd: (p0?) => any;
          logAdError: (p0?) => any;
        };
      };
      inStreamApi: {
        enabled: boolean;
        inStreamAdsSubscription: {};
        inStreamAd: {};
        onAdMessageCallbacks: {};
        adsCoreConnector: {
          createSlot: (p0?, p1?) => any;
          clearSlot: (p0?) => any;
          enableSlot: (p0?) => any;
          getAds: (p0?) => any;
          fetchSlot: (p0?, p1?) => any;
          getPreviewAd: (p0?) => any;
          getSlotSettings: (p0?) => any;
          getSlot: (p0?) => any;
          increaseStreamTime: (p0?) => any;
          insertStreamAd: (p0?) => any;
          overrideCountry: (p0?) => any;
          putState: (p0?, p1?) => any;
          putTargeting: (p0?) => any;
          subscribeToProductState: (p0?, p1?) => any;
          subscribeToInStreamAds: (p0?) => any;
          subscribeToSlot: (p0?, p1?) => any;
          triggerSlot: (p0?) => any;
          skipToNextWithOverride: () => any;
          setRequestHeader: (p0?, p1?, p2?) => any;
          removeRequestHeader: (p0?, p1?) => any;
          updateAdServerEndpoint: (p0?, p1?) => any;
          updateAdStateEndpoint: (p0?) => any;
          subscribeToAdFormat: (p0?, p1?) => any;
          subscribeToState: (p0?) => any;
          getAdState: () => any;
          overridePodcastMetadata: (p0?) => any;
          logAudioVolume: (p0?) => any;
        };
        enable: (p0?) => any;
        disable: () => any;
        subscribeToInStreamAds: () => any;
        getInStreamAd: () => any;
        onInStreamAdMessage: (p0?) => any;
        skipToNext: () => any;
      };
      adStateReporter: {
        focusState: {
          listeners: {};
          addFocusListener: (p0?) => any;
          removeFocusListener: (p0?) => any;
          removeAllFocusListeners: () => any;
          hasFocus: () => any;
        };
        setAdStateKey: (p0?, p1?) => any;
        history: {
          action: string;
          location: {
            pathname: string;
            search: string;
            hash: string;
            state: any;
            key: string;
          };
          index: number;
          createHref: (p0?) => any;
          replace: (p0?, p1?) => any;
          go: (p0?) => any;
          goBack: () => any;
          goForward: () => any;
          canGo: (p0?) => any;
          block: () => any;
          listen: (p0?) => any;
        };
        onFocusChanged: (p0?) => any;
      };
    };
    RemoteConfiguration: {
      accessListeners: {
        has: (p0?) => any;
        add: (p0?) => any;
        delete: (p0?) => any;
        clear: () => any;
        union: (p0?) => any;
        intersection: (p0?) => any;
        difference: (p0?) => any;
        symmetricDifference: (p0?) => any;
        isSubsetOf: (p0?) => any;
        isSupersetOf: (p0?) => any;
        isDisjointFrom: (p0?) => any;
      };
      getValue: (p0?) => any;
      toJSON: () => any;
      toBuilder: () => any;
    };
    RemoteConfigurationWithLocalOverrides: {
      accessListeners: {
        has: (p0?) => any;
        add: (p0?) => any;
        delete: (p0?) => any;
        clear: () => any;
        union: (p0?) => any;
        intersection: (p0?) => any;
        difference: (p0?) => any;
        symmetricDifference: (p0?) => any;
        isSubsetOf: (p0?) => any;
        isSupersetOf: (p0?) => any;
        isDisjointFrom: (p0?) => any;
      };
      getValue: (p0?) => any;
      toJSON: () => any;
      toBuilder: () => any;
    };
    GraphQLLoader: (p0?, p1?) => any;
    PlatformData: {
      remote_config_client_id: string;
      os_name: string;
      os_version: string;
      os_settings: {
        scroller_style: string;
        double_click_interval_ms: number;
      };
      app_platform: string;
      client_name: string;
      client_version_triple: string;
      client_version_quadruple: string;
      client_version_quintuple: string;
      client_capabilities: {
        can_autostart: boolean;
        can_restart: boolean;
        can_show_track_notifications: boolean;
        can_show_system_media_controls: boolean;
        can_minimize_or_exit_on_close: boolean;
      };
      event_sender_context_information: {
        device_id: string;
        device_manufacturer: string;
        device_model: string;
        platform_type: string;
        os_version: string;
        installation_id: string;
        client_id: string;
        client_version_string: string;
        client_version_int: number;
      };
      is_developer_mode: boolean;
    };
    SEOExperiments: {};
    SingAlongAPI: {
      karaokeServiceClient: {
        transport: {
          callSingle: (p0?) => any;
          callStream: (p0?, p1?) => any;
          call: (p0?, p1?, p2?, p3?) => any;
        };
        options: {};
        postVocalVolume: (p0?, p1?) => any;
        postStatus: (p0?, p1?) => any;
        getStatus: (p0?, p1?) => any;
        subscribeToEvents: (p0?, p1?) => any;
      };
      getCapabilities: () => any;
      setVocalVolume: (p0?) => any;
      setStatus: (p0?) => any;
      getStatus: () => any;
    };
    UBILogger: {
      formatUiNavigateEvent: (p0?) => any;
      ubiLogger: {
        eventSender: {
          instanceContexts: {
            context_application_desktop: any;
            context_client_id: any;
            context_installation_id: any;
            context_device_desktop: any;
          };
          uploadingInProgress: boolean;
          transport: {
            authenticate: () => any;
          };
          ownerProvider: () => any;
          uploaders: {
            authorized: any;
            unauthorized: any;
          };
          useOptimizedESS2NA: boolean;
          sendESStats: () => any;
          flush: () => any;
          storageManager: {
            currentTotalSizeForEvents: number;
            currentTotalSizeForDroppedCounters: number;
            maxStorageCapacityForEventsInBytes: number;
            maxStorageCapacityForDroppedCountersInBytes: number;
            storageKeyPrefix: string;
            storage: any;
            configureMaxStorageCapacity: (p0?) => any;
            setTotalEventStorageSizeAtStartup: () => any;
            setTotalDroppedCountersStorageSizeAtStartup: () => any;
          };
          droppedEventsTracker: {
            storageManager: any;
          };
          eventsManager: {
            storageManager: any;
          };
          installationId: string;
          sequenceIdProvider: {
            installationId: string;
          };
          sequenceNumberProvider: {
            storageManager: any;
          };
          statsProvider: {};
          initSendingEvents: () => any;
          initializeContexts: (p0?) => any;
          buildEvent: (p0?, p1?) => any;
          getSpecificContext: (p0?) => any;
          setupInstallationId: () => any;
          getStorageId: () => any;
          onBeforeDisconnect: () => any;
          lastFlush: () => any;
          sendEvents: (p0?) => any;
          sendESS2NAWithOptimization: (p0?, p1?, p2?, p3?) => any;
          commitAndUploadESStats: (p0?, p1?, p2?) => any;
          onSuccessfullySentESStats: (p0?) => any;
          sendToGabito: (p0?, p1?) => any;
          getEvents: (p0?) => any;
          storeEvent: (p0?, p1?) => any;
          validateEventData: (p0?, p1?, p2?) => any;
          send: (p0?) => any;
          hasContext: () => any;
          destroy: () => any;
          getStorageType: () => any;
          isUsingESS2NAOptimization: () => any;
          getVersion: () => any;
          finalFlush: () => any;
        };
        disableAutoBackgroundMonitoring: boolean;
        storageManager: {
          storageAdapter: {
            items: any;
          };
          getItem: (p0?) => any;
          setItem: (p0?, p1?) => any;
          removeItem: (p0?) => any;
          clear: () => any;
          getStorageType: () => any;
        };
        authenticationProvider: {
          isAuthenticated: () => any;
        };
        pageInfoProvider: {
          storageManager: {
            storageAdapter: any;
          };
          getPageInfo: () => any;
          getPageId: () => any;
          getPageInstanceId: () => any;
          getPageUri: () => any;
          getNavigationalRoot: () => any;
          setPageInfo: (p0?) => any;
        };
        contextualProviders: {
          playContextUriProvider: {
            getPlayContextUri: () => any;
          };
          playbackIdProvider: {
            getPlaybackId: () => any;
          };
        };
        pageViewLogger: {
          onVisibilityChange: () => any;
          onBlur: () => any;
          onFocus: () => any;
          eventSender: {
            instanceContexts: any;
            uploadingInProgress: boolean;
            transport: any;
            ownerProvider: () => any;
            uploaders: any;
            useOptimizedESS2NA: boolean;
            sendESStats: () => any;
            flush: () => any;
            storageManager: any;
            droppedEventsTracker: any;
            eventsManager: any;
            installationId: string;
            sequenceIdProvider: any;
            sequenceNumberProvider: any;
            statsProvider: any;
          };
          flowIdProvider: any;
          pageInfoProvider: {
            storageManager: any;
          };
          authenticationProvider: {
            isAuthenticated: () => any;
          };
          disableAutoBackgroundMonitoring: boolean;
          currentWindowState: {
            focused: boolean;
            visible: boolean;
          };
          storageManager: {
            storageAdapter: any;
          };
          getCurrentPageId: () => any;
          getCurrentPageInstanceId: () => any;
          getCurrentEntityUri: () => any;
          getCurrentNavigationalRoot: () => any;
          getNavigationStatus: () => any;
          setNavigationStatus: (p0?) => any;
          getPendingNavigationalRoot: () => any;
          setPendingNavigationalRoot: (p0?) => any;
          getPendingInteractionId: () => any;
          setPendingInteractionId: (p0?) => any;
          getPendingNavigationReason: () => any;
          setPendingNavigationReason: (p0?) => any;
          resetNavStartInfo: () => any;
          populateNavigationReason: () => any;
          generatePageInstanceId: () => any;
          setCurrent: (p0?, p1?, p2?, p3?) => any;
          isForeground: (p0?) => any;
          handleFocusChange: (p0?) => any;
          handleVisibilityChange: (p0?) => any;
          handleFocusStateChange: (p0?) => any;
          startNavigation: (p0?) => any;
          completeNavigation: (p0?) => any;
          logClientLostFocus: () => any;
          logClientGainedFocus: () => any;
          addEventListeners: () => any;
          removeEventListeners: () => any;
          logClientStarted: (p0?, p1?, p2?) => any;
        };
        registerEventListeners: () => any;
        unregisterEventListeners: () => any;
        logInteraction: (p0?) => any;
        logImpression: (p0?) => any;
        logNavigationStart: (p0?) => any;
        logNavigationEnd: (p0?) => any;
        logNavigation: (p0?, p1?) => any;
        logClientStarted: (p0?, p1?, p2?) => any;
        logClientLostFocus: () => any;
        logClientGainedFocus: () => any;
        getPageInstanceId: () => any;
      };
      getEvents: () => any;
      logInteraction: (p0?) => any;
      logImpression: (p0?) => any;
      logNavigation: (p0?) => any;
      logClientStarted: (p0?, p1?) => any;
      getInteractionId: (p0?) => any;
    };
    CollectionPlatformAPI: {
      cacheBySet: {
        artist: {};
        artistban: {};
        author: {};
        ban: {};
        collection: {};
        enhanced: {};
        ignoreinrecs: {};
        listenlater: {};
        show: {};
        ylpin: {};
        prerelease: {};
        tags: {};
        markedasfinished: {};
      };
      events: {
        emitUpdateItems: (p0?, p1?, p2?) => any;
        onBatchChanged: (p0?, p1?) => any;
      };
      getEvents: () => any;
      get: (p0?) => any;
      subscribe: (p0?, p1?) => any;
      add: (p0?, p1?) => any;
      remove: (p0?, p1?) => any;
      contains: (p0?, p1?) => any;
      containsSync: (p0?, p1?) => any;
      subscribeContains: (p0?, p1?, p2?) => any;
    };
    EqualizerAPI: {
      localStorageAPI: {
        items: any;
        max_retries: number;
        auto_cleanup: boolean;
        namespace: string;
        createNamespacedKey: (p0?) => any;
        parseLocalStorageValue: (p0?, p1?) => any;
        listenToStorageEvents: () => any;
        getEvents: () => any;
        getItem: (p0?) => any;
        setItem: (p0?, p1?) => any;
        setItemInternal: (p0?, p1?, p2?) => any;
        toggleItemsTypeAndCleanup: () => any;
        clearItem: (p0?) => any;
      };
      filters: {};
      prefs: {
        transport: {
          callSingle: (p0?) => any;
          callStream: (p0?, p1?) => any;
          call: (p0?, p1?, p2?, p3?) => any;
        };
        options: {};
        get: (p0?, p1?) => any;
        sub: (p0?, p1?) => any;
        getAll: (p0?, p1?) => any;
        subAll: (p0?, p1?) => any;
        set: (p0?, p1?) => any;
        create: (p0?, p1?) => any;
      };
      subscribeToEnabledState: (p0?) => any;
      setEnabledState: (p0?) => any;
      setFilterGain: (p0?, p1?) => any;
      getFilters: () => any;
      isSupported: () => any;
      setPreset: (p0?) => any;
      getPreset: () => any;
      subscribeToPresetChange: (p0?) => any;
    };
    BuddyFeedAPI: {
      presenceView: {
        builder: {
          pendingRequests: {};
          resetPendingRequests: () => any;
          build: () => any;
        };
        getBuddyActivity: (p0?) => any;
        getBuddyFeed: () => any;
        getBuddyFeedWithSubscribing: (p0?) => any;
      };
      presence2: {
        pubsub: {
          onConnectionId: (p0?) => any;
          getConnectionId: () => any;
          cancelSubscription: (p0?) => any;
          createSubscription: (p0?, p1?, p2?) => any;
          refreshSubscription: (p0?, p1?) => any;
          subscribe: (p0?) => any;
          getSubscriptions: () => any;
          getMessages: () => any;
          getEvents: () => any;
        };
        builder: {
          pendingRequests: {};
          resetPendingRequests: () => any;
          build: () => any;
        };
        subscribeToBuddyActivity: (p0?, p1?) => any;
        unsubscribeFromBuddiesActivity: (p0?, p1?) => any;
      };
      batchAPI: {
        pubsub: {
          onConnectionId: (p0?) => any;
          getConnectionId: () => any;
          cancelSubscription: (p0?) => any;
          createSubscription: (p0?, p1?, p2?) => any;
          refreshSubscription: (p0?, p1?) => any;
          subscribe: (p0?) => any;
          getSubscriptions: () => any;
          getMessages: () => any;
          getEvents: () => any;
        };
        presenceView: {
          builder: {
            pendingRequests: any;
          };
          getBuddyActivity: (p0?) => any;
          getBuddyFeed: () => any;
          getBuddyFeedWithSubscribing: (p0?) => any;
        };
        presence2: {
          pubsub: {};
          builder: {
            pendingRequests: any;
          };
          subscribeToBuddyActivity: (p0?, p1?) => any;
          unsubscribeFromBuddiesActivity: (p0?, p1?) => any;
        };
        subscription: {
          has: (p0?) => any;
          add: (p0?) => any;
          delete: (p0?) => any;
          clear: () => any;
          union: (p0?) => any;
          intersection: (p0?) => any;
          difference: (p0?) => any;
          symmetricDifference: (p0?) => any;
          isSubsetOf: (p0?) => any;
          isSupersetOf: (p0?) => any;
          isDisjointFrom: (p0?) => any;
        };
        subscribe: (p0?, p1?, p2?) => any;
        unsubscribe: (p0?) => any;
      };
      getCapabilities: () => any;
      subscribeToBuddyActivity: (p0?, p1?) => any;
      fetchFriendActivity: (p0?) => any;
      fetchFriendActivityByUsername: (p0?) => any;
      fetchFriendActivityWithSubscriptions: (p0?, p1?, p2?) => any;
    };
    SettingsAPI: {
      language: {
        value: {};
        subs: {
          has: (p0?) => any;
          add: (p0?) => any;
          delete: (p0?) => any;
          clear: () => any;
          union: (p0?) => any;
          intersection: (p0?) => any;
          difference: (p0?) => any;
          symmetricDifference: (p0?) => any;
          isSubsetOf: (p0?) => any;
          isSupersetOf: (p0?) => any;
          isDisjointFrom: (p0?) => any;
        };
        subscription: {};
        prefsApi: {
          transport: {};
          options: {};
          get: (p0?, p1?) => any;
          sub: (p0?, p1?) => any;
          getAll: (p0?, p1?) => any;
          subAll: (p0?, p1?) => any;
          set: (p0?, p1?) => any;
          create: (p0?, p1?) => any;
        };
        identifier: string;
        deserializeValue: (p0?) => any;
        getValue: () => any;
        subValue: (p0?) => any;
        serializeValue: (p0?) => any;
        setValue: (p0?) => any;
        key: string;
      };
      quality: {
        playbackService: {
          transport: {};
          options: {};
          getVolume: (p0?, p1?) => any;
          getRawVolume: (p0?, p1?) => any;
          subVolume: (p0?, p1?) => any;
          subRawVolume: (p0?, p1?) => any;
          setVolume: (p0?, p1?) => any;
          setRawVolume: (p0?, p1?) => any;
          raiseVolume: (p0?, p1?) => any;
          lowerVolume: (p0?, p1?) => any;
          getPlaybackInfo: (p0?, p1?) => any;
          subPlaybackInfo: (p0?, p1?) => any;
          getFormats: (p0?, p1?) => any;
          subPosition: (p0?, p1?) => any;
          getFiles: (p0?, p1?) => any;
          duck: (p0?, p1?) => any;
          subBufferUnderrun: (p0?, p1?) => any;
        };
        maxSupportedQuality: {
          value: {};
          subs: {};
          subscription: {};
          productStateApi: {
            productStateApi: any;
            cache: any;
          };
          identifier: string;
          deserialize: (p0?) => any;
          getValue: () => any;
          subValue: (p0?) => any;
          key: string;
          clampAudioQuality: (p0?) => any;
        };
        streamingQuality: {
          value: {};
          subs: {};
          subscription: {};
          prefsApi: {
            transport: any;
            options: any;
          };
          identifier: string;
          deserializeValue: (p0?) => any;
          getValue: () => any;
          subValue: (p0?) => any;
          serializeValue: (p0?) => any;
          setValue: (p0?) => any;
          key: string;
          maxSupportedQuality: {
            value: any;
            subs: any;
            subscription: any;
            productStateApi: any;
            identifier: string;
            deserialize: (p0?) => any;
            getValue: () => any;
            subValue: (p0?) => any;
            key: string;
            clampAudioQuality: (p0?) => any;
          };
        };
        downloadAudioQuality: {
          value: {};
          subs: {};
          subscription: {};
          prefsApi: {
            transport: any;
            options: any;
          };
          identifier: string;
          deserializeValue: (p0?) => any;
          getValue: () => any;
          subValue: (p0?) => any;
          serializeValue: (p0?) => any;
          setValue: (p0?) => any;
          key: string;
          maxSupportedQuality: {
            value: any;
            subs: any;
            subscription: any;
            productStateApi: any;
            identifier: string;
            deserialize: (p0?) => any;
            getValue: () => any;
            subValue: (p0?) => any;
            key: string;
            clampAudioQuality: (p0?) => any;
          };
        };
        normalizeVolume: {
          value: {};
          subs: {};
          subscription: {};
          prefsApi: {
            transport: any;
            options: any;
          };
          identifier: string;
          deserializeValue: (p0?) => any;
          getValue: () => any;
          subValue: (p0?) => any;
          serializeValue: (p0?) => any;
          setValue: (p0?) => any;
          key: string;
        };
        autoAdjustQuality: {
          value: {};
          subs: {};
          subscription: {};
          prefsApi: {
            transport: any;
            options: any;
          };
          identifier: string;
          deserializeValue: (p0?) => any;
          getValue: () => any;
          subValue: (p0?) => any;
          serializeValue: (p0?) => any;
          setValue: (p0?) => any;
          key: string;
        };
        volumeLevel: {
          value: {};
          subs: {};
          subscription: {};
          prefsApi: {
            transport: any;
            options: any;
          };
          identifier: string;
          deserializeValue: (p0?) => any;
          getValue: () => any;
          subValue: (p0?) => any;
          serializeValue: (p0?) => any;
          setValue: (p0?) => any;
          key: string;
        };
        remoteQuality: {
          callbacks: {};
          stateSubscription: {};
          key: string;
          connectService: {
            transport: any;
            options: any;
          };
          getActiveDeviceId: () => any;
          getValue: (p0?) => any;
          subValue: (p0?) => any;
          setValue: (p0?) => any;
        };
        parrot: {
          key: string;
          getValue: () => any;
          setValue: () => any;
          subValue: () => any;
        };
        getFormats: () => any;
      };
      social: {
        autoPublishPlaylist: {
          value: {};
          subs: {};
          subscription: {};
          productStateApi: {
            productStateApi: any;
            cache: any;
          };
          identifier: string;
          deserialize: (p0?) => any;
          getValue: () => any;
          subValue: (p0?) => any;
          serialize: (p0?) => any;
          setValue: (p0?) => any;
          key: string;
        };
        shareListeningActivity: {
          value: {};
          subs: {};
          subscription: {};
          productStateApi: {
            productStateApi: any;
            cache: any;
          };
          identifier: string;
          deserialize: (p0?) => any;
          getValue: () => any;
          subValue: (p0?) => any;
          serialize: (p0?) => any;
          setValue: (p0?) => any;
          key: string;
        };
        privateSession: {
          key: string;
          value: boolean;
          subs: {};
          unsubscribeFromPrivateSession: {};
          privateSessionAPI: {};
          getValue: () => any;
          setValue: (p0?) => any;
          subValue: (p0?) => any;
        };
        showMyTopArtists: {
          value: {};
          subs: {};
          subscription: {};
          productStateApi: {
            productStateApi: any;
            cache: any;
          };
          identifier: string;
          deserialize: (p0?) => any;
          getValue: () => any;
          subValue: (p0?) => any;
          serialize: (p0?) => any;
          setValue: (p0?) => any;
          key: string;
        };
      };
      autoPlay: {
        value: {};
        subs: {
          has: (p0?) => any;
          add: (p0?) => any;
          delete: (p0?) => any;
          clear: () => any;
          union: (p0?) => any;
          intersection: (p0?) => any;
          difference: (p0?) => any;
          symmetricDifference: (p0?) => any;
          isSubsetOf: (p0?) => any;
          isSupersetOf: (p0?) => any;
          isDisjointFrom: (p0?) => any;
        };
        subscription: {};
        productStateApi: {
          productStateApi: {
            transport: any;
            options: any;
          };
          cache: {};
          mapKeys: (p0?) => any;
          getValues: () => any;
          getCachedValues: () => any;
          subValues: (p0?) => any;
          setValues: (p0?) => any;
        };
        identifier: string;
        deserialize: (p0?) => any;
        getValue: () => any;
        subValue: (p0?) => any;
        serialize: (p0?) => any;
        setValue: (p0?) => any;
        key: string;
        autoPlaySupported: {
          value: {};
          subs: {};
          subscription: {};
          prefsApi: {
            transport: any;
            options: any;
          };
          identifier: string;
          deserializeValue: (p0?) => any;
          getValue: () => any;
          subValue: (p0?) => any;
        };
      };
      viewportZoom: {
        value: number;
        subs: {
          has: (p0?) => any;
          add: (p0?) => any;
          delete: (p0?) => any;
          clear: () => any;
          union: (p0?) => any;
          intersection: (p0?) => any;
          difference: (p0?) => any;
          symmetricDifference: (p0?) => any;
          isSubsetOf: (p0?) => any;
          isSupersetOf: (p0?) => any;
          isDisjointFrom: (p0?) => any;
        };
        subscription: {
          cancel: () => any;
        };
        prefsApi: {
          transport: {};
          options: {};
          get: (p0?, p1?) => any;
          sub: (p0?, p1?) => any;
          getAll: (p0?, p1?) => any;
          subAll: (p0?, p1?) => any;
          set: (p0?, p1?) => any;
          create: (p0?, p1?) => any;
        };
        identifier: string;
        deserializeValue: (p0?) => any;
        getValue: () => any;
        subValue: (p0?) => any;
        key: string;
        zoomApi: {
          zoomEsperanto: {
            transport: any;
            options: any;
          };
          getZoomLevel: () => any;
          setZoomLevel: (p0?) => any;
          zoomIn: () => any;
          zoomOut: () => any;
          getCapabilities: () => any;
        };
        setValue: (p0?) => any;
      };
      display: {
        nativeNotificationOnPlayerTransition: {
          value: {};
          subs: {};
          subscription: {};
          prefsApi: {
            transport: any;
            options: any;
          };
          identifier: string;
          deserializeValue: (p0?) => any;
          getValue: () => any;
          subValue: (p0?) => any;
          serializeValue: (p0?) => any;
          setValue: (p0?) => any;
          key: string;
        };
        nativeOverlayOnMediaKeys: {
          value: {};
          subs: {};
          subscription: {};
          prefsApi: {
            transport: any;
            options: any;
          };
          identifier: string;
          deserializeValue: (p0?) => any;
          getValue: () => any;
          subValue: (p0?) => any;
          serializeValue: (p0?) => any;
          setValue: (p0?) => any;
          key: string;
        };
        newReleasesAnnoucements: {
          value: {};
          subs: {};
          subscription: {};
          prefsApi: {
            transport: any;
            options: any;
          };
          identifier: string;
          deserializeValue: (p0?) => any;
          getValue: () => any;
          subValue: (p0?) => any;
          serializeValue: (p0?) => any;
          setValue: (p0?) => any;
          key: string;
        };
      };
      contentPreferences: {
        allowExplicitContent: {
          value: {};
          subs: {};
          subscription: {};
          productStateApi: {
            productStateApi: any;
            cache: any;
          };
          identifier: string;
          deserialize: (p0?) => any;
          getValue: () => any;
          subValue: (p0?) => any;
          serialize: (p0?) => any;
          setValue: (p0?) => any;
          key: string;
        };
        explicitContentForceDisallowed: {
          value: {};
          subs: {};
          subscription: {};
          productStateApi: {
            productStateApi: any;
            cache: any;
          };
          identifier: string;
          deserialize: (p0?) => any;
          getValue: () => any;
          subValue: (p0?) => any;
          key: string;
        };
      };
      employee: {
        isEmployee: {
          value: {};
          subs: {};
          subscription: {};
          productStateApi: {
            productStateApi: any;
            cache: any;
          };
          identifier: string;
          deserialize: (p0?) => any;
          getValue: () => any;
          subValue: (p0?) => any;
          key: string;
        };
        developerMode: {
          value: {};
          subs: {};
          subscription: {};
          prefsApi: {
            transport: any;
            options: any;
          };
          identifier: string;
          deserializeValue: (p0?) => any;
          getValue: () => any;
          subValue: (p0?) => any;
          serializeValue: (p0?) => any;
          setValue: (p0?) => any;
          key: string;
        };
        showChromeToolbar: {
          value: {};
          subs: {};
          subscription: {};
          prefsApi: {
            transport: any;
            options: any;
          };
          identifier: string;
          deserializeValue: (p0?) => any;
          getValue: () => any;
          subValue: (p0?) => any;
          serializeValue: (p0?) => any;
          setValue: (p0?) => any;
          key: string;
        };
      };
    };
    RequestBuilder: {
      pendingRequests: {
        has: (p0?) => any;
        add: (p0?) => any;
        delete: (p0?) => any;
        clear: () => any;
        union: (p0?) => any;
        intersection: (p0?) => any;
        difference: (p0?) => any;
        symmetricDifference: (p0?) => any;
        isSubsetOf: (p0?) => any;
        isSupersetOf: (p0?) => any;
        isDisjointFrom: (p0?) => any;
      };
      resetPendingRequests: () => any;
      build: () => any;
      accessToken: any;
      globalRequestHeaders: any;
      market: any;
      locale: any;
    };
    AudioOutputDevicesAPI: {
      devices: {};
      getDefaultDevice: () => any;
      getDevices: () => any;
      getEvents: () => any;
    };
    PlaybackFiltersAPI: {
      getFilterState: () => any;
      getDevices: () => any;
      getFiltersEvents: () => any;
      setCurrentDevice: () => any;
      getSavedDevices: () => any;
      removeCurrentDevice: () => any;
      isNormalizationOverriden: () => any;
      disableNormalizationOverride: () => any;
      isAvailable: () => any;
    };
    UrlDispenserServiceClient: {
      getShortUrl: (p0?, p1?) => any;
    };
    ExternalAccessoryAPI: {
      lookup: (p0?) => any;
      sendLookupRequest: (p0?) => any;
    };
    UserAPI: {
      getUser: () => any;
    };
    ProductStateAPI: {
      productStateApi: {
        transport: {
          callSingle: (p0?) => any;
          callStream: (p0?, p1?) => any;
          call: (p0?, p1?, p2?, p3?) => any;
        };
        options: {};
        getValues: (p0?, p1?) => any;
        subValues: (p0?, p1?) => any;
        putValues: (p0?, p1?) => any;
        putValuesSync: (p0?, p1?) => any;
        putOverridesValues: (p0?, p1?) => any;
        delOverridesValues: (p0?, p1?) => any;
      };
      cache: {
        isExpired: (p0?) => any;
        getExpiry: () => any;
        has: (p0?) => any;
        peek: (p0?) => any;
        get: (p0?) => any;
        set: (p0?, p1?) => any;
        create: (p0?, p1?) => any;
        delete: (p0?) => any;
        clear: () => any;
        cleanup: () => any;
      };
      mapKeys: (p0?) => any;
      getValues: () => any;
      getCachedValues: () => any;
      subValues: (p0?) => any;
      setValues: (p0?) => any;
    };
    AuthorizationAPI: {
      onTokenChanged: (p0?) => any;
      onAuthenticationFailed: (p0?, p1?) => any;
      getCapabilities: () => any;
      getEvents: () => any;
      getState: () => any;
      tryAuthorize: () => any;
      getSessionTransferURL: (p0?) => any;
    };
    LocalStorageAPI: {
      items: any;
      max_retries: number;
      auto_cleanup: boolean;
      namespace: string;
      createNamespacedKey: (p0?) => any;
      parseLocalStorageValue: (p0?, p1?) => any;
      listenToStorageEvents: () => any;
      getEvents: () => any;
      getItem: (p0?) => any;
      setItem: (p0?, p1?) => any;
      setItemInternal: (p0?, p1?, p2?) => any;
      toggleItemsTypeAndCleanup: () => any;
      clearItem: (p0?) => any;
    };
    RemoteConfigDebugAPI: {
      getProperties: () => any;
      setOverride: (p0?, p1?) => any;
      clearOverrides: () => any;
      update: (p0?) => any;
      getEvents: () => any;
      getLocalConfiguration: () => any;
    };
    ContextualShuffleAPI: {
      getContextualShuffleMode: (p0?) => any;
      setContextualShuffleMode: (p0?, p1?) => any;
      getEvents: () => any;
    };
    IndexedDbAPI: {
      name: string;
      version: number;
      getEvents: () => any;
      openDb: () => any;
      getItem: (p0?, p1?) => any;
      setItem: (p0?, p1?, p2?) => any;
      deleteItem: (p0?, p1?) => any;
    };
    UpdateAPI: {
      getVersionInfo: () => any;
      subscribe: (p0?) => any;
      prepareUpdate: () => any;
      applyUpdate: () => any;
    };
    NativeAPI: {
      setWindowButtonsVisibility: (p0?) => any;
    };
    ZoomAPI: {
      zoomEsperanto: {
        transport: {
          callSingle: (p0?) => any;
          callStream: (p0?, p1?) => any;
          call: (p0?, p1?, p2?, p3?) => any;
        };
        options: {};
        getZoomLevel: (p0?, p1?) => any;
        setZoomLevel: (p0?, p1?) => any;
        zoomIn: (p0?, p1?) => any;
        zoomOut: (p0?, p1?) => any;
      };
      getZoomLevel: () => any;
      setZoomLevel: (p0?) => any;
      zoomIn: () => any;
      zoomOut: () => any;
      getCapabilities: () => any;
    };
    PubSubAPI: {
      onConnectionId: (p0?) => any;
      getConnectionId: () => any;
      cancelSubscription: (p0?) => any;
      createSubscription: (p0?, p1?, p2?) => any;
      refreshSubscription: (p0?, p1?) => any;
      subscribe: (p0?) => any;
      getSubscriptions: () => any;
      getMessages: () => any;
      getEvents: () => any;
    };
    PlaylistResyncAPI: {
      lastSync: {
        get: (p0?) => any;
        set: (p0?, p1?) => any;
        has: (p0?) => any;
        delete: (p0?) => any;
        clear: () => any;
      };
      resync: (p0?) => any;
      maybeResync: (p0?) => any;
    };
    ConnectAPI: {
      state: {
        connectionStatus: string;
        activeDevice: {
          id: string;
          connectStateId: string;
          name: string;
          type: string;
          isGroup: boolean;
          isLocal: boolean;
          isActive: boolean;
          isConnecting: boolean;
          isDisabled: boolean;
          disabledReason: any;
          volume: number;
          losslessSupport: {
            fullySupported: boolean;
            deviceSupported: boolean;
            userEligible: boolean;
          };
          brandDisplayName: string;
          modelDisplayName: string;
          license: string;
          currentState: string;
          isLocalNetwork: boolean;
          isZeroconf: boolean;
          isWebApp: boolean;
          supportsLogout: boolean;
          incarnation: {
            preferred: any;
            available: any;
          };
          supportsDJNarration: boolean;
          supportedMediaTypes: {};
        };
        connectingDevice: {};
        devices: {};
      };
      checkDeviceId: (p0?) => any;
      mapIncarnationToLoginType: (p0?) => any;
      connectServiceClient: {
        transport: {
          callSingle: (p0?) => any;
          callStream: (p0?, p1?) => any;
          call: (p0?, p1?, p2?, p3?) => any;
        };
        options: {};
        state: (p0?, p1?) => any;
        startDiscovery: (p0?, p1?) => any;
        forceDiscover: (p0?, p1?) => any;
        performDiscovery: (p0?, p1?) => any;
        pickerOpened: (p0?, p1?) => any;
        refreshCluster: (p0?, p1?) => any;
        wakeSleepingClusterDevices: (p0?, p1?) => any;
        installSpotify: (p0?, p1?) => any;
        logout: (p0?, p1?) => any;
        transfer: (p0?, p1?) => any;
        sendCommand: (p0?, p1?) => any;
        cancelTransfer: (p0?, p1?) => any;
        pull: (p0?, p1?) => any;
        setDebugLevel: (p0?, p1?) => any;
        getDebugLevel: (p0?, p1?) => any;
        becomeInactive: (p0?, p1?) => any;
        rename: (p0?, p1?) => any;
        setPreferredZeroconf: (p0?, p1?) => any;
        notifyAudioRouteChanged: (p0?, p1?) => any;
        getDeviceSettings: (p0?, p1?) => any;
        setDeviceStreamQuality: (p0?, p1?) => any;
      };
      events: {
        connectServiceClient: {
          transport: {};
          options: {};
          state: (p0?, p1?) => any;
          startDiscovery: (p0?, p1?) => any;
          forceDiscover: (p0?, p1?) => any;
          performDiscovery: (p0?, p1?) => any;
          pickerOpened: (p0?, p1?) => any;
          refreshCluster: (p0?, p1?) => any;
          wakeSleepingClusterDevices: (p0?, p1?) => any;
          installSpotify: (p0?, p1?) => any;
          logout: (p0?, p1?) => any;
          transfer: (p0?, p1?) => any;
          sendCommand: (p0?, p1?) => any;
          cancelTransfer: (p0?, p1?) => any;
          pull: (p0?, p1?) => any;
          setDebugLevel: (p0?, p1?) => any;
          getDebugLevel: (p0?, p1?) => any;
          becomeInactive: (p0?, p1?) => any;
          rename: (p0?, p1?) => any;
          setPreferredZeroconf: (p0?, p1?) => any;
          notifyAudioRouteChanged: (p0?, p1?) => any;
          getDeviceSettings: (p0?, p1?) => any;
          setDeviceStreamQuality: (p0?, p1?) => any;
        };
      };
      getCapabilities: () => any;
      getState: () => any;
      getEvents: () => any;
      initiateLocalDiscovery: () => any;
      updateListOfDevices: () => any;
      createLoggingParams: (p0?) => any;
      pullToLocal: (p0?) => any;
      transferToRemote: (p0?, p1?) => any;
      transferPlayback: (p0?, p1?) => any;
      logout: (p0?) => any;
      setPreferredIncarnation: (p0?, p1?) => any;
    };
    ConnectDiscoveryAPI: {
      connectServiceClient: {
        transport: {
          callSingle: (p0?) => any;
          callStream: (p0?, p1?) => any;
          call: (p0?, p1?, p2?, p3?) => any;
        };
        options: {};
        state: (p0?, p1?) => any;
        startDiscovery: (p0?, p1?) => any;
        forceDiscover: (p0?, p1?) => any;
        performDiscovery: (p0?, p1?) => any;
        pickerOpened: (p0?, p1?) => any;
        refreshCluster: (p0?, p1?) => any;
        wakeSleepingClusterDevices: (p0?, p1?) => any;
        installSpotify: (p0?, p1?) => any;
        logout: (p0?, p1?) => any;
        transfer: (p0?, p1?) => any;
        sendCommand: (p0?, p1?) => any;
        cancelTransfer: (p0?, p1?) => any;
        pull: (p0?, p1?) => any;
        setDebugLevel: (p0?, p1?) => any;
        getDebugLevel: (p0?, p1?) => any;
        becomeInactive: (p0?, p1?) => any;
        rename: (p0?, p1?) => any;
        setPreferredZeroconf: (p0?, p1?) => any;
        notifyAudioRouteChanged: (p0?, p1?) => any;
        getDeviceSettings: (p0?, p1?) => any;
        setDeviceStreamQuality: (p0?, p1?) => any;
      };
      startActiveDiscovery: () => any;
    };
    ConnectTransferAPI: {
      connectServiceClient: {
        transport: {
          callSingle: (p0?) => any;
          callStream: (p0?, p1?) => any;
          call: (p0?, p1?, p2?, p3?) => any;
        };
        options: {};
        state: (p0?, p1?) => any;
        startDiscovery: (p0?, p1?) => any;
        forceDiscover: (p0?, p1?) => any;
        performDiscovery: (p0?, p1?) => any;
        pickerOpened: (p0?, p1?) => any;
        refreshCluster: (p0?, p1?) => any;
        wakeSleepingClusterDevices: (p0?, p1?) => any;
        installSpotify: (p0?, p1?) => any;
        logout: (p0?, p1?) => any;
        transfer: (p0?, p1?) => any;
        sendCommand: (p0?, p1?) => any;
        cancelTransfer: (p0?, p1?) => any;
        pull: (p0?, p1?) => any;
        setDebugLevel: (p0?, p1?) => any;
        getDebugLevel: (p0?, p1?) => any;
        becomeInactive: (p0?, p1?) => any;
        rename: (p0?, p1?) => any;
        setPreferredZeroconf: (p0?, p1?) => any;
        notifyAudioRouteChanged: (p0?, p1?) => any;
        getDeviceSettings: (p0?, p1?) => any;
        setDeviceStreamQuality: (p0?, p1?) => any;
      };
      pullToLocalDevice: (p0?) => any;
      transferPlayback: (p0?, p1?) => any;
      transferToRemote: (p0?, p1?) => any;
      createLoggingParams: (p0?) => any;
    };
    ConnectDeviceManagementAPI: {
      checkDeviceId: (p0?) => any;
      mapIncarnationToLoginType: (p0?) => any;
      connectServiceClient: {
        transport: {
          callSingle: (p0?) => any;
          callStream: (p0?, p1?) => any;
          call: (p0?, p1?, p2?, p3?) => any;
        };
        options: {};
        state: (p0?, p1?) => any;
        startDiscovery: (p0?, p1?) => any;
        forceDiscover: (p0?, p1?) => any;
        performDiscovery: (p0?, p1?) => any;
        pickerOpened: (p0?, p1?) => any;
        refreshCluster: (p0?, p1?) => any;
        wakeSleepingClusterDevices: (p0?, p1?) => any;
        installSpotify: (p0?, p1?) => any;
        logout: (p0?, p1?) => any;
        transfer: (p0?, p1?) => any;
        sendCommand: (p0?, p1?) => any;
        cancelTransfer: (p0?, p1?) => any;
        pull: (p0?, p1?) => any;
        setDebugLevel: (p0?, p1?) => any;
        getDebugLevel: (p0?, p1?) => any;
        becomeInactive: (p0?, p1?) => any;
        rename: (p0?, p1?) => any;
        setPreferredZeroconf: (p0?, p1?) => any;
        notifyAudioRouteChanged: (p0?, p1?) => any;
        getDeviceSettings: (p0?, p1?) => any;
        setDeviceStreamQuality: (p0?, p1?) => any;
      };
      logout: (p0?) => any;
      setPreferredIncarnation: (p0?, p1?) => any;
    };
    ConnectRestrictionsAPI: {
      localStorageAPI: {
        items: any;
        max_retries: number;
        auto_cleanup: boolean;
        namespace: string;
        createNamespacedKey: (p0?) => any;
        parseLocalStorageValue: (p0?, p1?) => any;
        listenToStorageEvents: () => any;
        getEvents: () => any;
        getItem: (p0?) => any;
        setItem: (p0?, p1?) => any;
        setItemInternal: (p0?, p1?, p2?) => any;
        toggleItemsTypeAndCleanup: () => any;
        clearItem: (p0?) => any;
      };
      restrict: (p0?) => any;
      getRestrictionState: () => any;
    };
    ConnectRestrictionStateAPI: {
      localStorageAPI: {
        items: any;
        max_retries: number;
        auto_cleanup: boolean;
        namespace: string;
        createNamespacedKey: (p0?) => any;
        parseLocalStorageValue: (p0?, p1?) => any;
        listenToStorageEvents: () => any;
        getEvents: () => any;
        getItem: (p0?) => any;
        setItem: (p0?, p1?) => any;
        setItemInternal: (p0?, p1?, p2?) => any;
        toggleItemsTypeAndCleanup: () => any;
        clearItem: (p0?) => any;
      };
      restrict: (p0?) => any;
      getRestrictionState: () => any;
    };
    ConnectDevicesAPI: {
      state: {
        connectionStatus: string;
        activeDevice: {
          id: string;
          connectStateId: string;
          name: string;
          type: string;
          isGroup: boolean;
          isLocal: boolean;
          isActive: boolean;
          isConnecting: boolean;
          isDisabled: boolean;
          disabledReason: any;
          volume: number;
          losslessSupport: {
            fullySupported: boolean;
            deviceSupported: boolean;
            userEligible: boolean;
          };
          brandDisplayName: string;
          modelDisplayName: string;
          license: string;
          currentState: string;
          isLocalNetwork: boolean;
          isZeroconf: boolean;
          isWebApp: boolean;
          supportsLogout: boolean;
          incarnation: {
            preferred: any;
            available: any;
          };
          supportsDJNarration: boolean;
          supportedMediaTypes: {};
        };
        connectingDevice: {};
        devices: {};
      };
      events: {
        connectServiceClient: {
          transport: {};
          options: {};
          state: (p0?, p1?) => any;
          startDiscovery: (p0?, p1?) => any;
          forceDiscover: (p0?, p1?) => any;
          performDiscovery: (p0?, p1?) => any;
          pickerOpened: (p0?, p1?) => any;
          refreshCluster: (p0?, p1?) => any;
          wakeSleepingClusterDevices: (p0?, p1?) => any;
          installSpotify: (p0?, p1?) => any;
          logout: (p0?, p1?) => any;
          transfer: (p0?, p1?) => any;
          sendCommand: (p0?, p1?) => any;
          cancelTransfer: (p0?, p1?) => any;
          pull: (p0?, p1?) => any;
          setDebugLevel: (p0?, p1?) => any;
          getDebugLevel: (p0?, p1?) => any;
          becomeInactive: (p0?, p1?) => any;
          rename: (p0?, p1?) => any;
          setPreferredZeroconf: (p0?, p1?) => any;
          notifyAudioRouteChanged: (p0?, p1?) => any;
          getDeviceSettings: (p0?, p1?) => any;
          setDeviceStreamQuality: (p0?, p1?) => any;
        };
      };
      connectRestrictor: {
        connectRestrictions: {
          localStorageAPI: {
            items: any;
            max_retries: number;
            auto_cleanup: boolean;
            namespace: string;
          };
          restrict: (p0?) => any;
          getRestrictionState: () => any;
        };
        updateRestrictedListOfDevices: (p0?) => any;
      };
      getConnectState: () => any;
      getActiveDevice: () => any;
      getDevices: () => any;
      getEvents: () => any;
    };
    PlayerAPI: {
      forcedShuffle: boolean;
      referrer: string;
      setDefaultFeatureVersion: (p0?) => any;
      getCapabilities: () => any;
      getEvents: () => any;
      getState: () => any;
      getReferrer: () => any;
      setReferrer: (p0?) => any;
      play: (p0?, p1?) => any;
      pause: (p0?) => any;
      resume: (p0?) => any;
      skipToNext: (p0?) => any;
      skipTo: (p0?) => any;
      skipToPrevious: () => any;
      seekTo: (p0?) => any;
      seekBy: (p0?) => any;
      seekForward: (p0?) => any;
      seekBackward: (p0?) => any;
      setShuffle: (p0?) => any;
      setRepeat: (p0?) => any;
      setSpeed: (p0?) => any;
      canPlayEncryptedContent: () => any;
      refreshCurrentContext: () => any;
      updateContext: (p0?, p1?, p2?) => any;
      sendSignal: (p0?, p1?) => any;
      canSendSignal: (p0?) => any;
      addToQueue: (p0?, p1?) => any;
      removeFromQueue: (p0?) => any;
      clearQueue: () => any;
      reorderQueue: (p0?, p1?) => any;
      insertIntoQueue: (p0?, p1?, p2?) => any;
      getQueue: () => any;
      getForcedShuffle: () => any;
      setForcedShuffle: (p0?) => any;
      playAsNextInQueue: (p0?) => any;
    };
    OvertureCoordinatorAPI: {
      instances: {
        delete: (p0?) => any;
        get: (p0?) => any;
        set: (p0?, p1?) => any;
        has: (p0?) => any;
      };
      currentActiveInstance: {};
      currentPlayerVolume: number;
      playerAPI: {
        forcedShuffle: boolean;
        referrer: string;
        setDefaultFeatureVersion: (p0?) => any;
        getCapabilities: () => any;
        getEvents: () => any;
        getState: () => any;
        getReferrer: () => any;
        setReferrer: (p0?) => any;
        play: (p0?, p1?) => any;
        pause: (p0?) => any;
        resume: (p0?) => any;
        skipToNext: (p0?) => any;
        skipTo: (p0?) => any;
        skipToPrevious: () => any;
        seekTo: (p0?) => any;
        seekBy: (p0?) => any;
        seekForward: (p0?) => any;
        seekBackward: (p0?) => any;
        setShuffle: (p0?) => any;
        setRepeat: (p0?) => any;
        setSpeed: (p0?) => any;
        canPlayEncryptedContent: () => any;
        refreshCurrentContext: () => any;
        updateContext: (p0?, p1?, p2?) => any;
        sendSignal: (p0?, p1?) => any;
        canSendSignal: (p0?) => any;
        addToQueue: (p0?, p1?) => any;
        removeFromQueue: (p0?) => any;
        clearQueue: () => any;
        reorderQueue: (p0?, p1?) => any;
        insertIntoQueue: (p0?, p1?, p2?) => any;
        getQueue: () => any;
        getForcedShuffle: () => any;
        setForcedShuffle: (p0?) => any;
        playAsNextInQueue: (p0?) => any;
      };
      playbackAPI: {
        getCapabilities: () => any;
        getEvents: () => any;
        getVolume: () => any;
        setVolume: (p0?) => any;
        raiseVolume: () => any;
        lowerVolume: () => any;
        getPlaybackInfo: () => any;
        getFiles: (p0?) => any;
        getVolumeInternal: () => any;
        emitVolume: () => any;
      };
      createOvertureInstance: (p0?) => any;
      deleteOvertureInstance: (p0?) => any;
      setupPlayerListeners: () => any;
      inactivateInstance: (p0?) => any;
      setupOvertureListeners: (p0?) => any;
    };
    SmartShuffleEligibilityAPI: {
      getEligibility: (p0?) => any;
    };
    ShuffleAPI: {
      isSmartShuffleEnabled: boolean;
      isNewShuffleModeOrderEnabled: boolean;
      getEvents: () => any;
      getAvailableShuffleModes: (p0?) => any;
      getShuffle: (p0?) => any;
      setShuffle: (p0?, p1?) => any;
    };
    PlaybackAPI: {
      getCapabilities: () => any;
      getEvents: () => any;
      getVolume: () => any;
      setVolume: (p0?) => any;
      raiseVolume: () => any;
      lowerVolume: () => any;
      getPlaybackInfo: () => any;
      getFiles: (p0?) => any;
      getVolumeInternal: () => any;
      emitVolume: () => any;
    };
    OfflineAPI: {
      getCapabilities: () => any;
      getEvents: () => any;
      getDownloads: () => any;
      getAvailabilitySync: (p0?) => any;
      getContextForDevices: (p0?) => any;
      addDownload: (p0?, p1?) => any;
      removeDownload: (p0?, p1?) => any;
      removeAllDownloads: () => any;
      removeCache: () => any;
      getStatistics: () => any;
    };
    LibraryAPI: {
      getCapabilities: () => any;
      getTracks: () => any;
      getTracksFilterTags: () => any;
      getEvents: () => any;
      add: (p0?) => any;
      remove: (p0?) => any;
      contains: () => any;
      containsSync: (p0?) => any;
      markAsPlayed: (p0?) => any;
      markAsUnPlayed: (p0?) => any;
      pin: (p0?, p1?) => any;
      unpin: (p0?) => any;
      getContents: (p0?) => any;
      getContentsPrimaryFilterId: (p0?) => any;
      getFilterLabel: (p0?) => any;
      getSortOrderLabel: (p0?) => any;
      getStaticallyKnownFilters: () => any;
      getRecentsSortOrderId: () => any;
      getCustomSortOrderId: () => any;
    };
    RootlistAPI: {
      getCapabilities: () => any;
      getMetadata: () => any;
      getContents: (p0?) => any;
      getEvents: () => any;
      onUpdateItems: (p0?, p1?) => any;
      applyModification: (p0?) => any;
      renameFolder: (p0?, p1?) => any;
      createFolder: (p0?, p1?) => any;
      moveFolder: (p0?, p1?) => any;
      removeFolder: (p0?) => any;
      createPlaylist: (p0?, p1?, p2?) => any;
      add: (p0?, p1?) => any;
      move: (p0?, p1?, p2?) => any;
      remove: (p0?) => any;
      contains: (p0?) => any;
      containsSync: (p0?) => any;
      getPublishedState: (p0?) => any;
      setPublishedState: (p0?, p1?) => any;
    };
    PlaylistAPI: {
      getCapabilities: () => any;
      getEvents: () => any;
      getPlaylist: (p0?, p1?, p2?) => any;
      getContents: (p0?, p1??) => any;
      getMetadata: (p0?, p1?) => any;
      resync: (p0?, p1?) => any;
      add: (p0?, p1?, p2?, p3?) => any;
      move: (p0?, p1?, p2?) => any;
      remove: (p0?, p1?) => any;
      uploadImage: (p0?) => any;
      setAttributes: (p0?, p1?) => any;
      clearAttributes: (p0?, p1?) => any;
      updateDetails: (p0?, p1?) => any;
      requestLenses: (p0?, p1?, p2?) => any;
      sendSignal: (p0?, p1?, p2?) => any;
      resolvePlaylistFormatURI: (p0?) => any;
      getRecommendedTracks: (p0?, p1?, p2?) => any;
      getRecommendedBookUris: (p0?, p1?, p2?) => any;
    };
    PlaylistPermissionsAPI: {
      getCapabilities: () => any;
      getEvents: () => any;
      getPermissionGrant: (p0?, p1?) => any;
      claimPermissions: (p0?, p1?) => any;
      getMembers: (p0?) => any;
      subscribeToMembers: (p0?, p1?) => any;
      removeMember: (p0?, p1?) => any;
      setMemberPermission: (p0?, p1?, p2?) => any;
      setBasePermission: (p0?, p1?) => any;
    };
    CurationAPI: {
      cache: {
        isExpired: (p0?) => any;
        getExpiry: () => any;
        has: (p0?) => any;
        peek: (p0?) => any;
        get: (p0?) => any;
        set: (p0?, p1?) => any;
        create: (p0?, p1?) => any;
        delete: (p0?) => any;
        clear: () => any;
        cleanup: () => any;
      };
      getDefaultCurationContextUri: (p0?) => any;
      events: {
        cache: {};
        aggregator: {};
        streamIsCuratedCancellable: {
          cancel: () => any;
        };
        onCuratedBatchChanged: (p0?) => any;
        emitUpdateCuratedItems: (p0?, p1?) => any;
        emitOperationSync: (p0?, p1?, p2?, p3?) => any;
        emitOperationComplete: (p0?, p1?, p2?, p3?) => any;
      };
      getCapabilities: () => any;
      getEvents: () => any;
      getCurationContexts: (p0?) => any;
      getAvailableSortOrders: () => any;
      curateItems: (p0?, p1?, p2?) => any;
      curateDefault: (p0?) => any;
      isCurated: () => any;
      isCuratedSync: (p0?) => any;
    };
    ShowAPI: {
      capabilities: {
        canSort: boolean;
        canFilter: boolean;
        canGetDefaultSort: boolean;
        canGetShowPlayedState: boolean;
        canMarkAsFinished: boolean;
      };
      isResumptionProgressEnabled: boolean;
      getMetadata: (p0?) => any;
      getAccessInfo: (p0?) => any;
      getBookContents: (p0?, p1?) => any;
      getContents: (p0?, p1?) => any;
      getEpisodeOrChapter: (p0?) => any;
      checkoutBook: (p0?) => any;
      getPlayerSort: (p0?) => any;
      getPlayerFilter: () => any;
      getEvents: () => any;
      getShowPlayedState: (p0?) => any;
      updateUserRating: (p0?, p1?) => any;
      markShowPlayedLegacy: (p0?, p1?) => any;
      invalidateShowMetadataCaches: (p0?) => any;
    };
    AudiobookCappingAPI: {
      getCappingStatus: (p0?) => any;
      getEvents: () => any;
      onUpdateCapping: (p0?) => any;
    };
    ReportAPI: {
      getReportURL: (p0?, p1?) => any;
      isURIReportable: (p0?) => any;
      canReportPlaylist: (p0?, p1?) => any;
    };
    LocalFilesAPI: {
      getCapabilities: () => any;
      getEvents: () => any;
      getIsEnabled: () => any;
      setIsEnabled: (p0?) => any;
      subscribeIsEnabled: (p0?) => any;
      browseForFolder: () => any;
      getSources: () => any;
      addFolder: (p0?) => any;
      removeFolder: (p0?) => any;
      mutateDefaultSource: (p0?) => any;
      getTracks: (p0?, p1?) => any;
    };
    PlayHistoryAPI: {
      getContents: () => any;
      getEvents: () => any;
      getCapabilities: () => any;
    };
    ControlMessageAPI: {
      enableMenuItem: (p0?) => any;
      disableMenuItem: (p0?) => any;
      setTitlebarHeight: (p0?) => any;
      enablePLEEndpoint: () => any;
      setPLEPorts: (p0?, p1?, p2?) => any;
      notifyUsableStateReached: (p0?) => any;
      notifyReadyStateReached: () => any;
      notifyViewLoaded: (p0?) => any;
      getEvents: () => any;
    };
    ClipboardAPI: {
      copy: (p0?) => any;
      paste: () => any;
    };
    FollowAPI: {
      getEvents: () => any;
      isFollowing: (p0?) => any;
      followUsers: (p0?) => any;
      unfollowUsers: (p0?) => any;
      executeOperation: (p0?, p1?, p2?) => any;
    };
    PrivateSessionAPI: {
      subscribeToPrivateSession: (p0?) => any;
      setPrivateSession: (p0?) => any;
      getCapabilities: () => any;
    };
    SegmentsAPI: {
      getCapabilities: () => any;
      getSegments: (p0?, p1?, p2?) => any;
      getArtists: () => any;
    };
    RecentlyPlayedAPI: {
      getEvents: () => any;
      getContexts: () => any;
      startListening: () => any;
    };
    ActionStoreAPI: {
      cleanActions: () => any;
      triggerActions: () => any;
      storeAction: () => any;
    };
    UserCommentsAPI: {
      getTopComments: (p0?) => any;
      getComments: (p0?, p1?) => any;
      addComment: (p0?, p1?) => any;
      deleteComment: (p0?) => any;
    };
    VideoAPI: {
      initialize: () => any;
      createPlayerConfiguration: () => any;
      getAccessToken: () => any;
      getProductState: () => any;
      createCoreExtensionVideoCoordinator: () => any;
      createVideoCoordinator: (p0?) => any;
      createOfflineCoordinator: (p0?) => any;
      onManifestLoaded: (p0?) => any;
      onPictureInPictureChanged: (p0?) => any;
      getPictureInPictureState: () => any;
      setSubtitleLanguages: (p0?) => any;
      getCapabilities: () => any;
      getEvents: () => any;
      getSubtitleLanguages: () => any;
      getPreferredSubtitleLanguage: () => any;
      setPreferredSubtitleLanguage: (p0?) => any;
      reportVideoMode: (p0?) => any;
      videoModeToSurface: (p0?) => any;
      setMinimizeBitrate: (p0?) => any;
      setFullscreen: (p0?) => any;
      setPip: (p0?) => any;
      setWindow: (p0?) => any;
    };
    SocialConnectAPI: {
      socialConnectServiceClient: {
        onConnected: (p0?) => any;
        fetchCurrentSession: (p0?) => any;
        createSession: () => any;
        leaveSession: (p0?) => any;
        deleteSession: (p0?) => any;
        joinSession: (p0?, p1?, p2?, p3?) => any;
        getSessionInfo: (p0?) => any;
        removeSessionMember: (p0?, p1?) => any;
        kickAllParticipants: (p0?) => any;
        setQueueOnlyMode: (p0?) => any;
        setParticipantVolumeControl: (p0?) => any;
        setBroadcastStatus: (p0?, p1?) => any;
      };
      serviceEvents: {
        numUpdateListeners: number;
        numMessageListeners: number;
        subscribeToUpdates: () => any;
        unsubscribeToUpdates: () => any;
        onSessionUpdate: (p0?) => any;
        subscribeToMessages: () => any;
        unsubscribeToMessages: () => any;
        onSessionMessage: (p0?) => any;
      };
      urlDispenserServiceClient: {
        getShortUrl: (p0?, p1?) => any;
      };
      socialConnectProductState: {
        productStateApi: {
          productStateApi: {
            transport: any;
            options: any;
          };
          cache: {};
          mapKeys: (p0?) => any;
          getValues: () => any;
          getCachedValues: () => any;
          subValues: (p0?) => any;
          setValues: (p0?) => any;
        };
        isJamFreeEnabled: boolean;
        isJamPremiumEnabled: boolean;
        listeners: {
          has: (p0?) => any;
          add: (p0?) => any;
          delete: (p0?) => any;
          clear: () => any;
          union: (p0?) => any;
          intersection: (p0?) => any;
          difference: (p0?) => any;
          symmetricDifference: (p0?) => any;
          isSubsetOf: (p0?) => any;
          isSupersetOf: (p0?) => any;
          isDisjointFrom: (p0?) => any;
        };
        getJamExperience: () => any;
        addListener: (p0?) => any;
      };
      socialConnectConfig: string;
      waitForActiveOrLocalDeviceId: () => any;
      socialConnectBroadcastingAPI: {
        getLocalNetSessionDevices: () => any;
        handleBroadcastStatusUpdate: () => any;
        handleWifiBroadcastUpdate: () => any;
        setBroadcastStatus: () => any;
        getEvents: () => any;
      };
      currentSession: {};
      events: {
        createEvent: (p0?, p1?) => any;
        addListener: (p0?, p1?, p2?) => any;
        removeListener: (p0?, p1?, p2?) => any;
        onAddListener: (p0?, p1?) => any;
        onRemoveListener: (p0?, p1?) => any;
        emit: (p0?, p1?) => any;
        emitSync: (p0?, p1?) => any;
      };
      shortLinkCaches: {
        shortLinkCache: {
          isExpired: (p0?) => any;
          getExpiry: () => any;
          has: (p0?) => any;
          peek: (p0?) => any;
          get: (p0?) => any;
          set: (p0?, p1?) => any;
          create: (p0?, p1?) => any;
          delete: (p0?) => any;
          clear: () => any;
          cleanup: () => any;
        };
        shortLinkQRCache: {
          isExpired: (p0?) => any;
          getExpiry: () => any;
          has: (p0?) => any;
          peek: (p0?) => any;
          get: (p0?) => any;
          set: (p0?, p1?) => any;
          create: (p0?, p1?) => any;
          delete: (p0?) => any;
          clear: () => any;
          cleanup: () => any;
        };
      };
      handleSessionUpdate: (p0?) => any;
      handleSessionMessage: (p0?) => any;
      isSessionNewer: (p0?) => any;
      getEnabled: () => any;
      getJamExperience: () => any;
      addJamExperienceListener: (p0?) => any;
      getCurrentSession: () => any;
      cleanupSession: () => any;
      emitSessionEnded: (p0?) => any;
      maybeEmitLeaveOrJoin: (p0?, p1?) => any;
      setCurrentSession: (p0?) => any;
      getEvents: () => any;
      handleSessionResponse: (p0?) => any;
      fetchCurrentSession: () => any;
      createSession: () => any;
      leaveSession: () => any;
      deleteSession: () => any;
      joinSession: (p0?, p1?, p2?, p3?) => any;
      getSessionInfo: (p0?) => any;
      getJoinTokenFromConnectDeviceId: (p0?) => any;
      removeSessionMember: (p0?) => any;
      kickAllParticipants: (p0?) => any;
      getShortInviteLink: (p0?, p1?, p2?) => any;
      setQueueOnlyMode: (p0?) => any;
      setParticipantVolumeControl: (p0?) => any;
      getLocalNetSessionDevices: () => any;
      setBroadcastStatus: (p0?) => any;
      getBroadcastingEvents: () => any;
    };
    JamDevicesAPI: {
      socialConnectAPI: {
        socialConnectServiceClient: {
          onConnected: (p0?) => any;
          fetchCurrentSession: (p0?) => any;
          createSession: () => any;
          leaveSession: (p0?) => any;
          deleteSession: (p0?) => any;
          joinSession: (p0?, p1?, p2?, p3?) => any;
          getSessionInfo: (p0?) => any;
          removeSessionMember: (p0?, p1?) => any;
          kickAllParticipants: (p0?) => any;
          setQueueOnlyMode: (p0?) => any;
          setParticipantVolumeControl: (p0?) => any;
          setBroadcastStatus: (p0?, p1?) => any;
        };
        serviceEvents: {
          numUpdateListeners: number;
          numMessageListeners: number;
          subscribeToUpdates: () => any;
          unsubscribeToUpdates: () => any;
          onSessionUpdate: (p0?) => any;
          subscribeToMessages: () => any;
          unsubscribeToMessages: () => any;
          onSessionMessage: (p0?) => any;
        };
        urlDispenserServiceClient: {
          getShortUrl: (p0?, p1?) => any;
        };
        socialConnectProductState: {
          productStateApi: {
            productStateApi: any;
            cache: any;
          };
          isJamFreeEnabled: boolean;
          isJamPremiumEnabled: boolean;
          listeners: {};
          getJamExperience: () => any;
          addListener: (p0?) => any;
        };
        socialConnectConfig: string;
        waitForActiveOrLocalDeviceId: () => any;
        socialConnectBroadcastingAPI: {
          getLocalNetSessionDevices: () => any;
          handleBroadcastStatusUpdate: () => any;
          handleWifiBroadcastUpdate: () => any;
          setBroadcastStatus: () => any;
          getEvents: () => any;
        };
        currentSession: {};
        events: {};
        shortLinkCaches: {
          shortLinkCache: {};
          shortLinkQRCache: {};
        };
        handleSessionUpdate: (p0?) => any;
        handleSessionMessage: (p0?) => any;
        isSessionNewer: (p0?) => any;
        getEnabled: () => any;
        getJamExperience: () => any;
        addJamExperienceListener: (p0?) => any;
        getCurrentSession: () => any;
        cleanupSession: () => any;
        emitSessionEnded: (p0?) => any;
        maybeEmitLeaveOrJoin: (p0?, p1?) => any;
        setCurrentSession: (p0?) => any;
        getEvents: () => any;
        handleSessionResponse: (p0?) => any;
        fetchCurrentSession: () => any;
        createSession: () => any;
        leaveSession: () => any;
        deleteSession: () => any;
        joinSession: (p0?, p1?, p2?, p3?) => any;
        getSessionInfo: (p0?) => any;
        getJoinTokenFromConnectDeviceId: (p0?) => any;
        removeSessionMember: (p0?) => any;
        kickAllParticipants: (p0?) => any;
        getShortInviteLink: (p0?, p1?, p2?) => any;
        setQueueOnlyMode: (p0?) => any;
        setParticipantVolumeControl: (p0?) => any;
        getLocalNetSessionDevices: () => any;
        setBroadcastStatus: (p0?) => any;
        getBroadcastingEvents: () => any;
      };
      getJamDevices: () => any;
      combineJamsWithEntities: (p0?, p1?, p2?) => any;
      areTheSame: (p0?, p1?) => any;
      removeJamIfWeAreOnItAlready: (p0?, p1?) => any;
      removeMatchedJams: (p0?, p1?) => any;
      createNearbyJamRowEntities: (p0?) => any;
      mergeJamsWithEntities: (p0?, p1?) => any;
      cleanupJams: (p0?, p1?, p2?) => any;
    };
    LifecycleAPI: {
      restart: () => any;
      shutdown: () => any;
    };
    FeedbackAPI: {
      getEvents: () => any;
      getCapabilities: () => any;
      addContextTrackBan: (p0?, p1?, p2?) => any;
      removeContextTrackBan: (p0?, p1?) => any;
    };
    DesktopLogsAPI: {
      getLogFolder: () => any;
      openFolder: (p0?) => any;
    };
  }
}
