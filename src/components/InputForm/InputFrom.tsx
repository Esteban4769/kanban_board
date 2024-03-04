import Search from "antd/es/input/Search";

export const InputForm = () => {
  return (
    <div>
       <Search placeholder="input search text" enterButton="Load issues" size="large" loading />
    </div>
  );
};
