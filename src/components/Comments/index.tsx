/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component } from 'react';

import styles from './comment.module.scss';
import commonStyles from '../../styles/common.module.scss';

export default class Comments extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    const anchor = document.getElementById('inject-comments-for-uterances');
    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('async', 'true');
    script.setAttribute(
      'repo',
      'ivopereira-jr/Chapter-III-criando-uma-aplicacao-do-zero'
    );
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-dark');
    anchor.appendChild(script);
  }

  render() {
    return (
      <div
        className={`${commonStyles.container} ${styles.comment}`}
        id="inject-comments-for-uterances"
      />
    );
  }
}
