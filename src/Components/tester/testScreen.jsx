import styles from './test.module.css';

function TestScreen() {

    return (
        <div className= {styles.waveText}>
        {Array.from('Hover over this text!').map((char, index) => (
          <span key={index} style={{ '--i': index }}>{char}</span>
        ))}
      </div>
    );

}

export default TestScreen;