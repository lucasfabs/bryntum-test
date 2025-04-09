import { FunctionComponent, useRef } from 'react';
import { BryntumGantt } from '@bryntum/gantt-react';
import { ganttProps } from './GanttConfig';
import './App.scss';

const App: FunctionComponent = () => {
  const gantt = useRef<BryntumGantt>(null);

  return <BryntumGantt ref={gantt} {...ganttProps} />;
};

export default App;
