import "./App.css";
import { useState } from "react";
import {
useMutation,
useQuery,
useQueryClient,
useIsFetching
} from "react-query";

import { fetchDataOne, fetchDataTwo,  addItemToDataOne, addItemToDataTwo} from "./mock/api";

const worker2 = new SharedWorker('worker.js');


export default function App() {
  const [count, setCount] = useState(0);
  const queryClient = useQueryClient();

  const { data: dataOne } = useQuery("dataOne", fetchDataOne);
  const { data: dataTwo } = useQuery("dataTwo", fetchDataTwo);
  const [dataOneUpdateMessage, setDataOneUpdateMessage] = useState('');
  const [dataTwoUpdateMessage, setDataTwoUpdateMessage] = useState('');


  const loading = useIsFetching() > 0;


  const addDataOne  =  useMutation(addItemToDataOne, {
    onSuccess: () => {
      queryClient.invalidateQueries("dataOne").finally(() => setDataOneUpdateMessage('Обновлено локально'))
      worker2.port.postMessage({name: 'dataOne'});
    }
  }, [])

  const addDataTwo  =  useMutation(addItemToDataTwo, {
    onSuccess: () => {
      queryClient.invalidateQueries("dataTwo").finally(() => setDataTwoUpdateMessage('Обновлено локально'))
      worker2.port.postMessage({name: 'dataTwo'});
    }
  }, [])


  const onButtonOneClick = () => {
    addDataOne.mutate()
  }

  const onButtonTwoClick = () => {
    addDataTwo.mutate();
  }

  const updateMessageFromServiceWorker = (name) => {
    if(name === 'dataOne') {
      setDataOneUpdateMessage('Обновлено по событию из shared worker')
    } else if (name === 'dataTwo') {
      setDataTwoUpdateMessage('Обновлено по событию из shared worker')
    }
  }

  // Register a callback to process the result from the worker
  worker2.port.onmessage = (event) => {
    if(event.data.name) {
      queryClient.invalidateQueries(event.data.name).finally(() => updateMessageFromServiceWorker(event.data.name))
    }

    if (event.data.count && event.data.count !== count) {
      setCount(event.data.count);
    }
  };

  return (
    <div className="app">
      <button onClick={onButtonOneClick}>Добавить в data One</button>
      <button onClick={onButtonTwoClick}>Добавить в data Two</button>
      <p>Кнопку нажимали {count} раз. Этот параметр храниться в shared workers</p>
      {loading && <p>Загрузка...</p>}
      <div className="app__data-wrapper">
        <p>{dataOneUpdateMessage}</p>
      {dataOne && dataOne.map((item) => {
        return <b>{item}</b>
      })}
      </div>
      <div className="app__data-wrapper">
      <p>{dataTwoUpdateMessage}</p>
      {dataTwo && dataTwo.map((item) => {
        return <b>{item}</b>
      })}
      </div>
    </div>
  );
}
