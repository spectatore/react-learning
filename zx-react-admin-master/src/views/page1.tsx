import { useSelector } from "react-redux";
import { useStoreTrigger } from "@/hooks";
import { Button } from "antd";
const View = () => {
  const StoreTrigger = useStoreTrigger();
  const count = useSelector((state: RootState) => state.testStore.count);
  const add2 = () => {
    StoreTrigger.dispatch({ type: "addCount", num: 2 });
  };
  const asyncAdd2 = () => {
    StoreTrigger.asyncDispatch({ type: "asyncAddCount", num: 2 });
  };
  return (
    <>
      <div>{count}</div>
      <Button type="primary" onClick={add2}>
        +2
      </Button>
      <Button type="primary" onClick={asyncAdd2}>
        异步+2
      </Button>
    </>
  );
};

export default View;
