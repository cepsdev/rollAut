#ifndef SM_COMPUTE_CORE_MANAGER_H
#define SM_COMPUTE_CORE_MANAGER_H

#include "monitoring.h"
#include "monitoring_observer.h"

namespace monitoring{
 class Statemachine_execution_core_manager: public monitoring::Observer{
 public:
     Statemachine_execution_core_manager(
             monitoring::Registry* reg,
             std::string,
             bool start_thread = true)
             : monitoring::Observer{reg,start_thread}
     {

     }
     void do_observe() override;
 };
}

#endif // SM_COMPUTE_CORE_MANAGER_H
