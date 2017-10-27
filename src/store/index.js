import { observable, action, useStrict } from 'mobx';

useStrict(true);

class store{

    @observable testData = "test attr";

    @action test = () =>{
        console.log('test mobox');
    }
}

const storeTest = new store();

export default storeTest;