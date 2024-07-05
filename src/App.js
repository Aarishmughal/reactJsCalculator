import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App(props) {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'CE') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <>
      <div className="row d-flex content-align-center align-items-center vh-100">
        <div className="col-lg-2"></div>
        <div className="col-lg">
          <div className="card p-4">
            <div className="row">
              <div className="col">
                <h1 className="display-1">Calculator</h1>
                <hr />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
              <Input className="form-control fs-1 fw-light text-end px-4 rounded-5" value={result || input } />
              </div>
            </div>
            <div className="row mb-2">
              <Button onClick={handleClick} className="btn btn-outline-primary rounded-5 " text="7" />
              <Button onClick={handleClick} className="btn btn-outline-primary rounded-5 " text="8" />
              <Button onClick={handleClick} className="btn btn-outline-primary rounded-5 " text="9" />
              <Button onClick={handleClick} className="btn btn-warning rounded-5 " text="+" />
            </div>
            <div className="row mb-2">
              <Button onClick={handleClick} className="btn btn-outline-primary rounded-5 " text="4" />
              <Button onClick={handleClick} className="btn btn-outline-primary rounded-5 " text="5" />
              <Button onClick={handleClick} className="btn btn-outline-primary rounded-5 " text="6" />
              <Button onClick={handleClick} className="btn btn-warning rounded-5 " text="-" />
            </div>
            <div className="row mb-2">
              <Button onClick={handleClick} className="btn btn-outline-primary rounded-5 " text="1" />
              <Button onClick={handleClick} className="btn btn-outline-primary rounded-5 " text="2" />
              <Button onClick={handleClick} className="btn btn-outline-primary rounded-5 " text="3" />
              <Button onClick={handleClick} className="btn btn-warning rounded-5 " text="*" />
            </div>
            <div className="row mb-2">
              <Button onClick={handleClick} className="btn btn-outline-primary rounded-5 " text="0" />
              <Button onClick={handleClick} className="btn btn-outline-danger rounded-5 " text="CE" />
              <Button onClick={handleClick} className="btn btn-info rounded-5 " text="=" />
              <Button onClick={handleClick} className="btn btn-warning rounded-5 " text="/" />
            </div>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </>
  );
}

export default App;
