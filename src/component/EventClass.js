
import styles from './EventClass.module.css';

export default function EventClass() {

    function showName(){
        console.log("KM DEV");
    }

    function showAge(age){
        console.log(age);
    }
    function showText(txt){
        console.log(txt);
    }
    return (
        <div className={styles.box}>
            <h1>Event Class</h1>
            <button onClick={showName}>show name</button>
            <button onClick={() =>{
                showAge(30);
            }}>show age</button>
            <input 
                type="text" onChange={e=>{
                    const txt = e.target.value;
                    showText(txt);
                }}
            />
        </div>
    
    );
}