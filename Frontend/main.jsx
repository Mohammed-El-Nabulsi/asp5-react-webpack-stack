import 'semantic-ui-css/semantic.css';
import { render } from 'react-dom';

render(
    <div>
        <button className="ui primary button">
            Hello World!
        </button>
    </div>
    ,
  document.getElementById('app'),
  () => document.title = 'Hello World'
);