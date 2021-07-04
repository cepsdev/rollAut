QT -= core gui

CONFIG += c++14 console
CONFIG -= app_bundle

QMAKE_CXXFLAGS += -std=c++14

# The following define makes your compiler emit warnings if you use
# any feature of Qt which as been marked deprecated (the exact warnings
# depend on your compiler). Please consult the documentation of the
# deprecated API in order to know how to port your code away from it.
DEFINES += QT_DEPRECATED_WARNINGS

# You can also make your code fail to compile if you use deprecated APIs.
# In order to do so, uncomment the following line.
# You can also select to disable deprecated APIs only up to a certain version of Qt.
#DEFINES += QT_DISABLE_DEPRECATED_BEFORE=0x060000    # disables all the APIs deprecated before Qt 6.0.0

INCLUDEPATH += $$_PRO_FILE_PWD_/../rapidjson
INCLUDEPATH += $$_PRO_FILE_PWD_/../sql2rollout
QMAKE_POST_LINK += $$quote(cp workflow_registry ../bin/staccato)

SOURCES += \
        main.cpp \
    test_ringbuffer.cpp \
    test_threadsafe_queue_with_fixed_capacity.cpp \
    test_registry_adding_nodes.cpp \
    monitoring_utils_diff.cpp \
    monitoring_node_json.cpp \
    monitoring_observer.cpp \
    monitoring.cpp \
    monitoring_registry_add_node.cpp \
    test_basic_observer.cpp \
    http_utils.cpp \
    rollaut_async_stream.cpp \
    rollaut_wsserver_stream.cpp \
    rollaut_ws_interface.cpp \
    test_echo_websocket_server.cpp \
    ../sql2rollout/rollaut_db_rollout_serialize_to_ceps.cpp \
    rollaut_reg_manager.cpp \
    test_state_stream_service.cpp \
    rollaut_rollout_db_importer.cpp \
    registry_utils.cpp \
    sm_compute_core_manager.cpp \
    websocket_utils.cpp

HEADERS += \
    ringbuffer.h \
    threadsafe_queue.h \
    monitoring.h \
    tests.h \
    monitoring_observer.h \
    http_utils.h \
    rollaut_async_stream.h \
    rollaut_wsserver_stream.h \
    rollaut_ws_interface.h \
    rollaut_reg_manager.h \
    rollaut_rollout_db_importer.h \
    registry_utils.h \
    sm_compute_core_manager.h \
    websocket_utils.h


LIBS+= -L$$PWD/../cryptopp
LIBS+= -lmysqlcppconn
LIBS+=  -ldl -lpthread -lrt -lcryptopp
