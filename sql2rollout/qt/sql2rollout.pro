


QMAKE_CXXFLAGS += -O3 -g3 -Wall -MD -fmessage-length=0 -std=c++14 -Wl,--no-as-needed -fPIC 




INCLUDEPATH += $$_PRO_FILE_PWD_/../..


QT       -= core gui

TARGET = extract_rollouts
TEMPLATE = app

LIBS+=-lmysqlcppconn


SOURCES   += $$_PRO_FILE_PWD_/../extract_rollouts.cpp \
    ../rollaut_db_rollout_serialize_to_ceps.cpp
QMAKE_POST_LINK += $$quote(cp extract_rollouts ../../bin/extract_rollouts)

HEADERS += \
    ../rollout_serialization.h

