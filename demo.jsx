import React from 'react';
import {render} from 'react-dom';

import CorrectIcon from './correct-icon.jsx';
import PartiallyCorrectIcon from './partially-correct-icon.jsx';
import IncorrectIcon from './incorrect-icon.jsx';
import NothingSubmittedIcon from './nothing-submitted-icon.jsx';
import ShowRationaleIcon from './show-rationale-icon.jsx';
import LearnMoreIcon from './learn-more-icon.jsx';
import CorrectResponseIcon from './correct-response-icon.jsx';
import InstructionsIcon from './instructions-icon.jsx';

class DemoApp extends React.Component {
  render () {
    return <table>
      <thead>
        <tr>
          <th>
            Rendering
          </th>
          <th>
            Markup
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><CorrectIcon iconSet="emoji" /></td>
          <td><pre><code>&#x3C;CorrectIcon iconSet=&#x22;emoji&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><CorrectIcon iconSet="check" /></td>
          <td><pre><code>&#x3C;CorrectIcon iconSet=&#x22;check&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><CorrectIcon iconSet="emoji" shape="square" /></td>
          <td><pre><code>&#x3C;CorrectIcon iconSet=&#x22;emoji&#x22; shape=&#x22;square&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><CorrectIcon iconSet="check" shape="square" /></td>
          <td><pre><code>&#x3C;CorrectIcon iconSet=&#x22;check&#x22; shape=&#x22;square&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><CorrectIcon iconSet="emoji" shape="square" open={true} /></td>
          <td><pre><code>&#x3C;CorrectIcon iconSet=&#x22;emoji&#x22; shape=&#x22;square&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><CorrectIcon iconSet="emoji" shape="round" open={true} /></td>
          <td><pre><code>&#x3C;CorrectIcon iconSet=&#x22;emoji&#x22; shape=&#x22;round&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><CorrectIcon iconSet="check" shape="square" open={true} /></td>
          <td><pre><code>&#x3C;CorrectIcon iconSet=&#x22;check&#x22; shape=&#x22;square&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><CorrectIcon iconSet="check" shape="round" open={true} /></td>
          <td><pre><code>&#x3C;CorrectIcon iconSet=&#x22;check&#x22; shape=&#x22;round&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><CorrectIcon iconSet="emoji" category="feedback" /></td>
          <td><pre><code>&#x3C;CorrectIcon iconSet=&#x22;emoji&#x22; category=&#x22;feedback&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><CorrectIcon iconSet="check" category="feedback" /></td>
          <td><pre><code>&#x3C;CorrectIcon iconSet=&#x22;check&#x22; category=&#x22;feedback&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><CorrectIcon iconSet="emoji" category="feedback" shape="square" /></td>
          <td><pre><code>&#x3C;CorrectIcon iconSet=&#x22;emoji&#x22; category=&#x22;feedback&#x22; shape=&#x22;square&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><CorrectIcon iconSet="check" category="feedback" shape="square" /></td>
          <td><pre><code>&#x3C;CorrectIcon iconSet=&#x22;check&#x22; category=&#x22;feedback&#x22; shape=&#x22;square&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><CorrectIcon iconSet="emoji" category="feedback" shape="round" open={true} /></td>
          <td><pre><code>&#x3C;CorrectIcon iconSet=&#x22;emoji&#x22; category=&#x22;feedback&#x22; shape=&#x22;round&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><CorrectIcon iconSet="check" category="feedback" shape="round" open={true} /></td>
          <td><pre><code>&#x3C;CorrectIcon iconSet=&#x22;check&#x22; category=&#x22;feedback&#x22; shape=&#x22;round&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>        
        <tr>
          <td><CorrectIcon iconSet="emoji" category="feedback" shape="square" open={true} /></td>
          <td><pre><code>&#x3C;CorrectIcon iconSet=&#x22;emoji&#x22; category=&#x22;feedback&#x22; shape=&#x22;square&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><CorrectIcon iconSet="check" category="feedback" shape="square" open={true} /></td>
          <td><pre><code>&#x3C;CorrectIcon iconSet=&#x22;check&#x22; category=&#x22;feedback&#x22; shape=&#x22;square&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><PartiallyCorrectIcon iconSet="emoji" /></td>
          <td><pre><code>&#x3C;PartiallyCorrectIcon iconSet=&#x22;emoji&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><PartiallyCorrectIcon iconSet="check" /></td>
          <td><pre><code>&#x3C;PartiallyCorrectIcon iconSet=&#x22;check&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><PartiallyCorrectIcon iconSet="emoji" shape="square" /></td>
          <td><pre><code>&#x3C;PartiallyCorrectIcon iconSet=&#x22;emoji&#x22; shape=&#x22;square&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><PartiallyCorrectIcon iconSet="check" shape="square" /></td>
          <td><pre><code>&#x3C;PartiallyCorrectIcon iconSet=&#x22;check&#x22; shape=&#x22;square&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><PartiallyCorrectIcon iconSet="emoji" shape="square" open={true} /></td>
          <td><pre><code>&#x3C;PartiallyCorrectIcon iconSet=&#x22;emoji&#x22; shape=&#x22;square&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><PartiallyCorrectIcon iconSet="emoji" shape="round" open={true} /></td>
          <td><pre><code>&#x3C;PartiallyCorrectIcon iconSet=&#x22;emoji&#x22; shape=&#x22;round&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><PartiallyCorrectIcon iconSet="check" shape="square" open={true} /></td>
          <td><pre><code>&#x3C;PartiallyCorrectIcon iconSet=&#x22;check&#x22; shape=&#x22;square&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><PartiallyCorrectIcon iconSet="check" shape="round" open={true} /></td>
          <td><pre><code>&#x3C;PartiallyCorrectIcon iconSet=&#x22;check&#x22; shape=&#x22;round&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><PartiallyCorrectIcon iconSet="emoji" category="feedback" /></td>
          <td><pre><code>&#x3C;PartiallyCorrectIcon iconSet=&#x22;emoji&#x22; category=&#x22;feedback&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><PartiallyCorrectIcon iconSet="check" category="feedback" /></td>
          <td><pre><code>&#x3C;PartiallyCorrectIcon iconSet=&#x22;check&#x22; category=&#x22;feedback&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><PartiallyCorrectIcon iconSet="emoji" category="feedback" shape="square" /></td>
          <td><pre><code>&#x3C;PartiallyCorrectIcon iconSet=&#x22;emoji&#x22; category=&#x22;feedback&#x22; shape=&#x22;square&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><PartiallyCorrectIcon iconSet="check" category="feedback" shape="square" /></td>
          <td><pre><code>&#x3C;PartiallyCorrectIcon iconSet=&#x22;check&#x22; category=&#x22;feedback&#x22; shape=&#x22;square&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><PartiallyCorrectIcon iconSet="emoji" category="feedback" shape="round" open={true} /></td>
          <td><pre><code>&#x3C;PartiallyCorrectIcon iconSet=&#x22;emoji&#x22; category=&#x22;feedback&#x22; shape=&#x22;round&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><PartiallyCorrectIcon iconSet="check" category="feedback" shape="round" open={true} /></td>
          <td><pre><code>&#x3C;PartiallyCorrectIcon iconSet=&#x22;check&#x22; category=&#x22;feedback&#x22; shape=&#x22;round&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>        
        <tr>
          <td><PartiallyCorrectIcon iconSet="emoji" category="feedback" shape="square" open={true} /></td>
          <td><pre><code>&#x3C;PartiallyCorrectIcon iconSet=&#x22;emoji&#x22; category=&#x22;feedback&#x22; shape=&#x22;square&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><PartiallyCorrectIcon iconSet="check" category="feedback" shape="square" open={true} /></td>
          <td><pre><code>&#x3C;PartiallyCorrectIcon iconSet=&#x22;check&#x22; category=&#x22;feedback&#x22; shape=&#x22;square&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><IncorrectIcon iconSet="emoji" /></td>
          <td><pre><code>&#x3C;IncorrectIcon iconSet=&#x22;emoji&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><IncorrectIcon iconSet="check" /></td>
          <td><pre><code>&#x3C;IncorrectIcon iconSet=&#x22;check&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><IncorrectIcon iconSet="emoji" shape="square" /></td>
          <td><pre><code>&#x3C;IncorrectIcon iconSet=&#x22;emoji&#x22; shape=&#x22;square&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><IncorrectIcon iconSet="check" shape="square" /></td>
          <td><pre><code>&#x3C;IncorrectIcon iconSet=&#x22;check&#x22; shape=&#x22;square&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><IncorrectIcon iconSet="emoji" shape="square" open={true} /></td>
          <td><pre><code>&#x3C;IncorrectIcon iconSet=&#x22;emoji&#x22; shape=&#x22;square&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><IncorrectIcon iconSet="emoji" shape="round" open={true} /></td>
          <td><pre><code>&#x3C;IncorrectIcon iconSet=&#x22;emoji&#x22; shape=&#x22;round&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><IncorrectIcon iconSet="check" shape="square" open={true} /></td>
          <td><pre><code>&#x3C;IncorrectIcon iconSet=&#x22;check&#x22; shape=&#x22;square&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><IncorrectIcon iconSet="check" shape="round" open={true} /></td>
          <td><pre><code>&#x3C;IncorrectIcon iconSet=&#x22;check&#x22; shape=&#x22;round&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><IncorrectIcon iconSet="emoji" category="feedback" /></td>
          <td><pre><code>&#x3C;IncorrectIcon iconSet=&#x22;emoji&#x22; category=&#x22;feedback&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><IncorrectIcon iconSet="check" category="feedback" /></td>
          <td><pre><code>&#x3C;IncorrectIcon iconSet=&#x22;check&#x22; category=&#x22;feedback&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><IncorrectIcon iconSet="emoji" category="feedback" shape="square" /></td>
          <td><pre><code>&#x3C;IncorrectIcon iconSet=&#x22;emoji&#x22; category=&#x22;feedback&#x22; shape=&#x22;square&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><IncorrectIcon iconSet="check" category="feedback" shape="square" /></td>
          <td><pre><code>&#x3C;IncorrectIcon iconSet=&#x22;check&#x22; category=&#x22;feedback&#x22; shape=&#x22;square&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><IncorrectIcon iconSet="emoji" category="feedback" shape="round" open={true} /></td>
          <td><pre><code>&#x3C;IncorrectIcon iconSet=&#x22;emoji&#x22; category=&#x22;feedback&#x22; shape=&#x22;round&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><IncorrectIcon iconSet="check" category="feedback" shape="round" open={true} /></td>
          <td><pre><code>&#x3C;IncorrectIcon iconSet=&#x22;check&#x22; category=&#x22;feedback&#x22; shape=&#x22;round&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>        
        <tr>
          <td><IncorrectIcon iconSet="emoji" category="feedback" shape="square" open={true} /></td>
          <td><pre><code>&#x3C;IncorrectIcon iconSet=&#x22;emoji&#x22; category=&#x22;feedback&#x22; shape=&#x22;square&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><IncorrectIcon iconSet="check" category="feedback" shape="square" open={true} /></td>
          <td><pre><code>&#x3C;IncorrectIcon iconSet=&#x22;check&#x22; category=&#x22;feedback&#x22; shape=&#x22;square&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><NothingSubmittedIcon iconSet="check" /></td>
          <td><pre><code>&#x3C;NothingSubmittedIcon iconSet=&#x22;check&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><NothingSubmittedIcon iconSet="emoji" /></td>
          <td><pre><code>&#x3C;NothingSubmittedIcon iconSet=&#x22;emoji&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><NothingSubmittedIcon iconSet="check" category="feedback" /></td>
          <td><pre><code>&#x3C;NothingSubmittedIcon iconSet=&#x22;check&#x22; category=&#x22;feedback&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><NothingSubmittedIcon iconSet="emoji" category="feedback" /></td>
          <td><pre><code>&#x3C;NothingSubmittedIcon iconSet=&#x22;emoji&#x22; category=&#x22;feedback&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><NothingSubmittedIcon iconSet="check" category="feedback" shape="square" /></td>
          <td><pre><code>&#x3C;NothingSubmittedIcon iconSet=&#x22;check&#x22; category=&#x22;feedback&#x22; shape=&#x22;square&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><NothingSubmittedIcon iconSet="emoji" category="feedback" shape="square" /></td>
          <td><pre><code>&#x3C;NothingSubmittedIcon iconSet=&#x22;emoji&#x22; category=&#x22;feedback&#x22; shape=&#x22;square&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><NothingSubmittedIcon iconSet="check" category="feedback" shape="square" open={true} /></td>
          <td><pre><code>&#x3C;NothingSubmittedIcon iconSet=&#x22;check&#x22; category=&#x22;feedback&#x22; shape=&#x22;square&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><NothingSubmittedIcon iconSet="emoji" category="feedback" shape="square" open={true} /></td>
          <td><pre><code>&#x3C;NothingSubmittedIcon iconSet=&#x22;emoji&#x22; category=&#x22;feedback&#x22; shape=&#x22;square&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><ShowRationaleIcon iconSet="emoji" /></td>
          <td><pre><code>&#x3C;ShowRationaleIcon iconSet=&#x22;emoji&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><ShowRationaleIcon iconSet="check" /></td>
          <td><pre><code>&#x3C;ShowRationaleIcon iconSet=&#x22;check&#x22; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><ShowRationaleIcon iconSet="emoji" open={true} /></td>
          <td><pre><code>&#x3C;ShowRationaleIcon iconSet=&#x22;emoji&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><ShowRationaleIcon iconSet="check" open={true} /></td>
          <td><pre><code>&#x3C;ShowRationaleIcon iconSet=&#x22;check&#x22; open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><LearnMoreIcon open={false} /></td>
          <td><pre><code>&#x3C;LearnMoreIcon open=&#123;false&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><LearnMoreIcon open={true} /></td>
          <td><pre><code>&#x3C;LearnMoreIcon open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><CorrectResponseIcon open={false} /></td>
          <td><pre><code>&#x3C;CorrectResponseIcon open=&#123;false&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><CorrectResponseIcon open={true} /></td>
          <td><pre><code>&#x3C;CorrectResponseIcon open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><InstructionsIcon open={false} /></td>
          <td><pre><code>&#x3C;InstructionsIcon open=&#123;false&#125; /&#x3E;</code></pre></td>
        </tr>
        <tr>
          <td><InstructionsIcon open={true} /></td>
          <td><pre><code>&#x3C;InstructionsIcon open=&#123;true&#125; /&#x3E;</code></pre></td>
        </tr>
      </tbody>
    </table>;
  }
}

render(<DemoApp/>, document.getElementById('app'));