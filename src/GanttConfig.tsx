import { BryntumGanttProps } from "@bryntum/gantt-react";

interface CustomProjectConfig {
    dependencyConstraint?: boolean;
}

const ganttProps: BryntumGanttProps & { project: CustomProjectConfig } = {
    columns                 : [
        {
            type        : 'resourceassignment',
            width       : 250,
            showAvatars : true,
            editor      : {
                type   : 'assignmentfield',
                // The picker config is applied to the Grid
                picker : {
                    height   : 350,
                    width    : 450,
                }
            }
        }
    ],
  viewPreset: "weekAndDayLetter",
  barMargin: 10,

  project: {
    transport: {
      load: {
        url: "data.json",
      },
    },
    autoLoad: true,
    // Automatically introduces a `startnoearlier` constraint for tasks that (a) have no predecessors, (b) do not use
    // constraints and (c) aren't `manuallyScheduled`
    autoSetConstraints: false,
    dependencyConstraint: false,
  },
};

export { ganttProps };
