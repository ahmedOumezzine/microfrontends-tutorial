import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './TaskList';

createRoot(document.getElementById('root')).render(<TaskList selectedTask="1" />);
