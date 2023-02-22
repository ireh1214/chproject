import React from 'react';

export default function Conti() {
  const btnClick1 = () => {
    const subInner1 = document.getElementsByClassName('subInner1');
    subInner1.style.display = 'block';
  };

  return (
    <div className="conti_wrap">
      <div className="conti_inner">
        <h2>2/20</h2>
        <div className="conti_1" onClick={btnClick1}>
          This is Our Time
        </div>
        <div className="sub_inner">
          <p className="code"> C</p>
          <p className="head"> 이용수</p>
          <p className="reference"> ... ...com </p>
          <p className="conti">콘티 </p>
        </div>
        <div className="conti_2"> From thi inside out</div>
        <div className="sub_inner">
          <p className="code"> C</p>
          <p className="head"> 이용수</p>
          <p className="reference"> ... ...com </p>
        </div>
        <div className="conti_3"> Take It all</div>
        <div className="sub_inner">
          <p className="code"> C</p>
          <p className="head"> 이용수</p>
          <p className="reference"> ... ...com </p>
        </div>
        <div className="conti_4"> you are good</div>
        <div className="sub_inner">
          <p className="code"> C</p>
          <p className="head"> 이용수</p>
          <p className="reference"> ... ...com </p>
        </div>
      </div>

      <hr />
    </div>
  );
}
