import { Button } from "bootstrap";

export default function test() {
    <button onClick={test}>Default</button>;
    var q = new Date();
    var date = new Date(q.getFullYear(),q.getMonth(),q.getDate());
    
    var mydate = new Date(document.getElementById('dval').value);
    
    if(date > mydate) {
        return (
            <Button>reeee</Button>
    )
    } else {
        return (
            <Button>qwww</Button>
    )
    }
    }
<button onClick={test}>Default</button>;