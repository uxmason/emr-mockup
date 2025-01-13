"use client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const arrayTopMenu = [{
    lv0:'Favorites',
    style:'isFavorite',
    lv1:[{
      name:'Home',
      style:'isHome',
      lv2:[],
    },{
      name:'Management',
      style:'isFavorite',
      lv2:[],
    }]
  },{
    lv0:'Collection',
    style:'isPart',
    lv1:[{
      name:'Payment',
      style:'isPart',
      lv2:[],
    },{
      name:'consultation',
      style:'isPart',
      lv2:[],
    },{
      name:'Procedures',
      style:'isConsultation',
      lv2:[],
    },{
      name:'Treatment',
      style:'isConsultation',
      lv2:[],
    }]
  },{
    lv0:'Payment',
    style:'isDollar',
    lv1:[{
      name:'Payment',
      style:'isPart',
    }]
  },{
    lv0:'Customer',
    style:'isUser',
    lv1:[{
      name:'Bardoce',
      style:'isPart',
    },{
      name:'Branch',
      style:'isPart',
    },{
      name:'Customer',
      style:'isPart',
    },{
      name:'Blood Test',
      style:'isPart',
    },{
      name:'Action Index',
      style:'isPart',
    },{
      name:'Success Stories',
      style:'isPart',
    }]
  },{
    lv0:'Consultation',
    style:'isConsultation',
    lv1:[{
      name:'Consultation Materials',
      style:'isPart',
    },{
      name:'Customer Consultations',
      style:'isPart',
    },{
      name:'Registration status',
      style:'isPart',
    },{
      name:'Call Recordings',
      style:'isPart',
    },{
      name:'Surveys',
      style:'isPart',
    }]
  },{
    lv0:'LAMS',
    style:'isLams',
    lv1:[{
      name:'LAMS Consultations',
      style:'isPart',
    },{
      name:'Procedure Status',
      style:'isPart',
    },{
      name:'Registration Status',
      style:'isPart',
    },{
      name:'Payment Status',
      style:'isPart',
    },{
      name:'Prescription Details',
      style:'isPart',
    },{
      name:'LAMS Reservations',
      style:'isPart',
    }]
  },{
    lv0:'Reservation',
    style:'isCheck',
    lv1:[{
      name:'Reservation Registration',
      style:'isPart',
    },{
      name:'LAMS Reservations',
      style:'isPart',
    },{
      name:'Reservation Date Changes',
      style:'isPart',
    }]
  },{
    lv0:'Treatment',
    style:'isConsultation',
    lv1:[{
      name:'Prescriptions',
      style:'isPart',
    },{
      name:'Ultrasounds',
      style:'isPart',
    },{
      name:'Prescription Edits',
      style:'isPart',
    },{
      name:'Prescription Materials',
      style:'isPart',
    }]
  },{
    lv0:'CRM',
    style:'isCRM',
    lv1:[{
      name:'Customer Data',
      style:'isPart',
    },{
      name:'Customer Satisfaction',
      style:'isPart',
    }]
  },{
    lv0:'Statistics',
    style:'isStatistic',
    lv1:[{
      name:'Customer Data',
      style:'isPart',
    },{
      name:'Consultation Data',
      style:'isPart',
    },{
      name:'Procedure Data',
      style:'isPart',
    },{
      name:'Medical Care Data',
      style:'isPart',
    },{
      name:'Indicator Management',
      style:'isPart',
    }]
  }];
  const asideRightRef = useRef<HTMLDivElement>(null);
  const autoCompleteRef = useRef<HTMLDivElement>(null);
  const [selectedLv0Index] = useState(1);
  const [selectedLv1Index] = useState(0);
  const [isOpenedLv1, setOpenedLv1] = useState(false);
  const [isOpenedLv2] = useState(false);
  const [isHoverMain, setHoverMain] = useState(false);
  const [isTickerPsentry, setTickerPsentry] = useState(false);
  const [isTickerDoctor, setTickerDoctor] = useState(false);
  const [isTickerRoom, setTickerRoom] = useState(false);
  const [isOpenedAutoComplete, setOpenedAutoComplete] = useState(false);
  const [isSearchedUser, setSearchedUser] = useState(false);
  const [isOpenedLeftAside, setOpenedLeftAside] = useState(false);
  const [isOpenedRightAside, setOpenedRightAside] = useState(false);
  const [isOpenedSpecialInfo, setOpenedSpecialInfo] = useState(false);
  const [isOpenedPredictionList, setOpenedPredictionList] = useState(false);
  const [isOpenedMenuList, setOpenedMenuList] = useState(false);
  const [height, setHeight] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (asideRightRef.current) {
      if(asideRightRef.current.offsetHeight > 870) {
        setHeight(asideRightRef.current.offsetHeight);
      }else {
        setHeight(870);
      }
    }
    const handleResize = () => {
      if (asideRightRef.current) {
        if(asideRightRef.current.offsetHeight > 870) {
          setHeight(asideRightRef.current.offsetHeight);
        }else {
          setHeight(870);
        }
      }
    };
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="urtitan isEng">
      <header className="m-3" onClick={() => {
        setOpenedLeftAside(false);
        setOpenedRightAside(false);
        }}>
        <div className="C-00 h-10">
          <p className="leading-10 font-bold pl-2 T-00" style={{float:'left'}}><span className="isOrange isHover">부산365mc병원</span> <span className="isGrey isHover"> / 파트구분</span><span className="isHover"> / 접수파트</span></p>
        </div>
        <div className="C-01">
          <div className="C-02 isHover"><div className="C-03 styleSheet isMessage"></div><p className="T-01">13</p></div>
          <div className="C-02 isHover"><div className="C-03 styleSheet isAlert"></div><p className="T-01">2</p></div>
          <div className="isPortrait Idrh82" style={{backgroundColor: 'rgba(255,143,141,1)', width:40, height:40, borderRadius:20, border:'2px solid white', float:'left', display:'flex', marginLeft:10}}></div>
          <p className="text-xs ps-2 leading-10 font-semibold" style={{display:'flex', float:'left'}}>홍성훈<span className="font-medium text-gray-400 ps-1">원장</span></p>
          <div className="styleSheet w-6 h-6 m-2 rounded-md isHover" style={{backgroundColor:'rgba(0,0,0,.1)', display:'flex', float:'left'}}></div>
        </div>
      </header>
      <div className="header-menu isLeft isHover" onClick={() => {
        setOpenedLeftAside(true);
        setOpenedRightAside(false);
        }}>
        <div className="C-00"></div>
        <div className="C-00"></div>
        <div className="C-00"></div>
      </div>
      <div className="header-menu isRight isHover" onClick={() => {
        setOpenedLeftAside(false);
        setOpenedRightAside(true);
        }}>
        <div className="C-00"></div>
        <div className="C-00"></div>
        <div className="C-00"></div>
        <div className="C-00"></div>
      </div>
      <main className="m-3" onMouseEnter={() => {setHoverMain(true)}} onMouseLeave={() => {setHoverMain(false)}}onClick={() => {
        setOpenedLeftAside(false);
        setOpenedRightAside(false);
        }}>
        <section className="S-00">
          <div className="C-00">
            <input type="text" className="I-00" placeholder="차트번호 / 고객명 / 생년월일" onFocus={() => {
              setOpenedAutoComplete(true);
            }} onBlur={(e: React.FocusEvent) => {
              const relatedTarget = e.relatedTarget as Node;
              if (autoCompleteRef.current && autoCompleteRef.current.contains(relatedTarget)) {
                return;
              }
              setOpenedAutoComplete(false);
            }}></input>
            <div className="C-01">
              <p className="T-02 text-xs text-gray-500">최종등록번호:</p><p className="T-03 font-semibold text-gray-300">360081179</p>
            </div>
          </div>
          <div className="C-09">
            <p className="T-06 isHover"><span className="isIcon styleSheet isBarcode"></span>바코드</p>
            <p className="T-06 isHover"><span className="isIcon styleSheet isPrediction"></span>일일 시술 처방</p>
            <p className="T-05 isOrange isHover">수납</p>
            <p className="T-05 isHover">접수</p>
          </div>
          {!isSearchedUser ? <div className="C-02">
            <div className="C-03 styleSheet"></div>
            <div className="C-04 styleSheet"></div>
          </div> : null}
          {isOpenedAutoComplete ? <div className="C-05">
            <div className="C-06 isHidedScrollBar" ref={autoCompleteRef} tabIndex={-1}>
              <div className="C-07">
                <p className="T-04" onClick={() => {setSearchedUser(true); setOpenedAutoComplete(false);}}><span className="isName">문성후</span>차트번호:<span className="isPsentry">360081149</span>생년월일:<span className="isLicence">971030</span><span className="isSearchIcon styleSheet"></span></p>
                <p className="T-04" onClick={() => {setSearchedUser(true); setOpenedAutoComplete(false);}}><span className="isName">문성후</span>차트번호:<span className="isPsentry">360081149</span>생년월일:<span className="isLicence">971030</span><span className="isSearchIcon styleSheet"></span></p>
                <p className="T-04" onClick={() => {setSearchedUser(true); setOpenedAutoComplete(false);}}><span className="isName">문성후</span>차트번호:<span className="isPsentry">360081149</span>생년월일:<span className="isLicence">971030</span><span className="isSearchIcon styleSheet"></span></p>
                <p className="T-04" onClick={() => {setSearchedUser(true); setOpenedAutoComplete(false);}}><span className="isName">문성후</span>차트번호:<span className="isPsentry">360081149</span>생년월일:<span className="isLicence">971030</span><span className="isSearchIcon styleSheet"></span></p>
                <p className="T-04" onClick={() => {setSearchedUser(true); setOpenedAutoComplete(false);}}><span className="isName">문성후</span>차트번호:<span className="isPsentry">360081149</span>생년월일:<span className="isLicence">971030</span><span className="isSearchIcon styleSheet"></span></p>
                <p className="T-04" onClick={() => {setSearchedUser(true); setOpenedAutoComplete(false);}}><span className="isName">문성후</span>차트번호:<span className="isPsentry">360081149</span>생년월일:<span className="isLicence">971030</span><span className="isSearchIcon styleSheet"></span></p>
                <p className="T-04" onClick={() => {setSearchedUser(true); setOpenedAutoComplete(false);}}><span className="isName">문성후</span>차트번호:<span className="isPsentry">360081149</span>생년월일:<span className="isLicence">971030</span><span className="isSearchIcon styleSheet"></span></p>
                <p className="T-04" onClick={() => {setSearchedUser(true); setOpenedAutoComplete(false);}}><span className="isName">문성후</span>차트번호:<span className="isPsentry">360081149</span>생년월일:<span className="isLicence">971030</span><span className="isSearchIcon styleSheet"></span></p>
                <p className="T-04" onClick={() => {setSearchedUser(true); setOpenedAutoComplete(false);}}><span className="isName">문성후</span>차트번호:<span className="isPsentry">360081149</span>생년월일:<span className="isLicence">971030</span><span className="isSearchIcon styleSheet"></span></p>
                <p className="T-04" onClick={() => {setSearchedUser(true); setOpenedAutoComplete(false);}}><span className="isName">문성후</span>차트번호:<span className="isPsentry">360081149</span>생년월일:<span className="isLicence">971030</span><span className="isSearchIcon styleSheet"></span></p>
              </div>
            </div>
          </div> : null}
        </section>
        {isSearchedUser ? <section className="S-01">
          <div className="C-00">
            <div className="C-01 isMain">
              <div className="C-02 styleSheet isUser"></div>
              <p className="T-02">기본정보</p>
              <div className="T-11 isHover" onClick={() => {
                setOpenedSpecialInfo(true);
              }}>특수정보<div className={`C-16 styleSheet`}></div></div>
              <p className="T-00 isBold"><span className="isTitle">차트번호:</span>360081179</p>
              <p className="T-01"><span className="isTitle">최초등록일:</span>24.05.09</p>
              <p className="T-00 isBold"><span className="isTitle">고객명:</span>문성후</p>
              <p className="T-01"><span className="isTitle">영문명:</span>Moon Sung Hoo</p>
              <p className="T-00"><span className="isTitle">주민번호:</span>971030-2094311</p>
              <p className="T-01">여성 만36세 내국인 본인인증완료</p>
              <p className="T-00"><span className="isTitle">휴대전화:</span>010-4925-9876</p>
              <p className="T-00"><span className="isTitle">특기사항:</span>서포터,</p>
              <div className={`C-15 ${isOpenedSpecialInfo ? 'isOpened' : null}`}  onClick={() => {
                setOpenedSpecialInfo(false);
              }}></div>
              <div className={`C-14 isHidedScrollBar ${isOpenedSpecialInfo ? 'isOpened' : null}`}>
                <p className="T-08 font-extralight">특수정보</p>
                <p className="T-09">스페셜 과거력</p>
                <p className="T-10">간장 공장 공장장은 간 공장장이고, 된장 공장 공장장은 된 공장장이다.</p>
                <p className="T-09">복용중인 약</p>
                <p className="T-10">.</p>
                <p className="T-09">스페셜 체질</p>
                <p className="T-10">.</p>
                <p className="T-09">기타 스페셜 이슈</p>
                <p className="T-10">.</p>
              </div>
            </div>
            <div className="C-22">
              <p className="T-16 isHover">수납조회</p>
              <p className="T-16 isHover">시술조회</p>
              <p className="T-16 isHover">처치조회</p>
              <p className="T-16 isHover">약처방</p>
              <p className="T-16 isHover">실천지수</p>
            </div>
            <div className="C-03">
              <div className="C-02 styleSheet isCard"></div>
              <p className="T-02">패키지 정보</p>
              <p className="T-13">계약일: <span className="isDate">2024.09.24</span></p>
              <div className="C-11 isHidedScrollBar">
                <div className="C-12">
                  <div className="C-13 isSurgery">
                    <div className="C-18">
                      <div className="C-20 styleSheet"></div>
                      <p className="T-15"><span className="isBox isOrange">O.P</span><span className="isBox">복부</span><span className="isBox isThin">FAT0946</span>복부위아래+러브+옆구리(앞뒤)<span className="isComment">횟수:<span className="isValue isBold">2</span></span><span className="isComment">금액:<span className="isValue isPrice">2,112,000</span>원</span><span className="isComment">DC:<span className="isValue isDiscount">-211,200</span>원</span><span className="isComment">등록자:<span className="isValue">김지수</span></span><span className="isComment">참조:<span className="isValue">뒷볼방향</span></span></p>
                      {/* <div className="C-21 styleSheet isStomach"></div> */}
                    </div>
                    <div className="C-19">
                      <p className="T-14">진행중</p>
                    </div>
                  </div>
                  <div className="C-13 isSurgery">
                    <div className="C-18">
                      <div className="C-20 styleSheet"></div>
                      <p className="T-15"><span className="isBox isOrange">O.P</span><span className="isBox">복부</span><span className="isBox isThin">FAT0946</span>가멘트-복부(여자용)<span className="isComment">횟수:<span className="isValue isBold">2</span></span><span className="isComment">등록자:<span className="isValue">김지수</span></span></p>
                      {/* <div className="C-21 styleSheet isStomach"></div> */}
                    </div>
                    <div className="C-19">
                      <p className="T-14">진행중</p>
                    </div>
                  </div>
                  <div className="C-13 isLams">
                    <div className="C-18 isCompleted">
                      <div className="C-20 styleSheet"></div>
                      <p className="T-15"><span className="isBox isYellow">시술</span><span className="isBox">복부</span><span className="isBox isThin">FAT0946</span>지흡후관리-RF(병행)<span className="isComment">횟수:<span className="isValue isBold">2</span></span><span className="isComment">등록자:<span className="isValue">김지수</span></span></p>
                      {/* <div className="C-21 styleSheet isStomach"></div> */}
                    </div>
                    <div className="C-19 isCompleted">
                      <p className="T-14">종료<span className="isDate">24.11.14<br/>15:32</span></p>
                    </div>
                  </div>
                  <div className="C-13 isLams">
                    <div className="C-18 isCompleted">
                      <div className="C-20 styleSheet"></div>
                      <p className="T-15"><span className="isBox isYellow">시술</span><span className="isBox">복부</span><span className="isBox isThin">FAT0946</span>지흡후관리-엔더(병행)<span className="isComment">횟수:<span className="isValue isBold">2</span></span><span className="isComment">등록자:<span className="isValue">김지수</span></span></p>
                      {/* <div className="C-21 styleSheet isStomach"></div> */}
                    </div>
                    <div className="C-19 isCompleted">
                      <p className="T-14">종료<span className="isDate">24.11.14<br/>15:32</span></p>
                    </div>
                  </div>
                  <div className="C-13 isLams">
                    <div className="C-18 isCompleted">
                      <div className="C-20 styleSheet"></div>
                      <p className="T-15"><span className="isBox isYellow">시술</span><span className="isBox">복부</span><span className="isBox isThin">FAT0946</span>지흡후관리-카복시(병행)<span className="isComment">횟수:<span className="isValue isBold">2</span></span><span className="isComment">등록자:<span className="isValue">김지수</span></span></p>
                      {/* <div className="C-21 styleSheet isStomach"></div> */}
                    </div>
                    <div className="C-19 isCompleted">
                      <p className="T-14">종료<span className="isDate">24.11.14<br/>15:32</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="C-00">
            <div className="C-03">
              <p className="T-03 font-extralight">내원 기록</p>
              <div className="C-17">
                <p className="T-12 isHover isNow isSelected">내원</p>
                <p className="T-12 isHover isTreatment isSelected">진료</p>
                <p className="T-12 isHover isCouncil isSelected">상담</p>
                <p className="T-12 isHover isMemo isSelected">메모</p>
              </div>
              <div className="C-05 isShort"></div>
              <div className="C-04 isHidedScrollBar isShort">
                <div className="C-06">
                  <div className="C-07">
                    <div className="C-08"><div className="C-09 isNow"></div><p className="T-04"><span className="isDate">25.01.13</span><br/>14:30</p></div>
                    <div className="C-10"><p className="T-06"><span className="isStatus isNow">내원중</span><span className="isRoom isHover" onMouseEnter={() => {setTickerRoom(true)}} onMouseLeave={() => {setTickerRoom(false)}}>제2진료실</span>체외충격파</p><p className="T-07"><span className="isBox isDoctor" onMouseEnter={() => {setTickerDoctor(true)}} onMouseLeave={() => {setTickerDoctor(false)}}><span className="isPortrait Idrus"></span>이유섭<span className="isUnit">처방의</span></span></p></div>
                  </div>
                  <div className="C-07">
                    <div className="C-08"><div className="C-09 isCompleted"></div><p className="T-04"><span className="isDate">25.01.13</span><br/>14:30</p></div>
                    <div className="C-10"><p className="T-06"><span className="isStatus isCompleted">진료완료</span><span className="isRoom isHover" onMouseEnter={() => {setTickerRoom(true)}} onMouseLeave={() => {setTickerRoom(false)}}>제2진료실</span>체외충격파</p><p className="T-07"><span className="isBox isDoctor" onMouseEnter={() => {setTickerDoctor(true)}} onMouseLeave={() => {setTickerDoctor(false)}}><span className="isPortrait Idrus"></span>이유섭<span className="isUnit">처방의</span></span></p></div>
                  </div>
                  <div className="C-07">
                    <div className="C-08"><div className="C-09 isCompleted"></div><p className="T-04"><span className="isDate">25.01.13</span><br/>14:30</p></div>
                    <div className="C-10"><p className="T-06"><span className="isStatus isCompleted">진료완료</span><span className="isRoom isHover" onMouseEnter={() => {setTickerRoom(true)}} onMouseLeave={() => {setTickerRoom(false)}}>제2진료실</span>체외충격파</p><p className="T-07"><span className="isBox isDoctor" onMouseEnter={() => {setTickerDoctor(true)}} onMouseLeave={() => {setTickerDoctor(false)}}><span className="isPortrait Idrus"></span>이유섭<span className="isUnit">처방의</span></span></p></div>
                  </div>
                  <div className="C-07">
                    <div className="C-08"><div className="C-09 isCompleted"></div><p className="T-04"><span className="isDate">25.01.13</span><br/>14:30</p></div>
                    <div className="C-10"><p className="T-06"><span className="isStatus isCompleted">진료완료</span><span className="isRoom isHover" onMouseEnter={() => {setTickerRoom(true)}} onMouseLeave={() => {setTickerRoom(false)}}>제2진료실</span>체외충격파</p><p className="T-07"><span className="isBox isDoctor" onMouseEnter={() => {setTickerDoctor(true)}} onMouseLeave={() => {setTickerDoctor(false)}}><span className="isPortrait Idrus"></span>이유섭<span className="isUnit">처방의</span></span></p></div>
                  </div>
                  <div className="C-07">
                    <div className="C-08"><div className="C-09 isComment"></div><p className="T-04"><span className="isDate">25.01.13</span><br/>14:30</p></div>
                    <div className="C-10"><p className="T-06 isComment">네트웍스 서포터<br/>1개월: 66kg (11/13)<br/>2개월: 62.8kg (12/13)<br/>3개월: 60.8kg (1/13) 내원시 체크</p><p className="T-07"><span className="isBox isComment"><span className="isUnit">작성자: </span>김유진</span></p></div>
                  </div>
                  <div className="C-07">
                    <div className="C-08"><div className="C-09 isCompletedCouncil"></div><p className="T-04"><span className="isDate">25.01.13</span><br/>14:30</p></div>
                    <div className="C-10"><p className="T-06"><span className="isStatus isCompletedCouncil">상담완료</span><span className="isRoom isHover" onMouseEnter={() => {setTickerRoom(true)}} onMouseLeave={() => {setTickerRoom(false)}}>제8상담실</span>시술신환상담</p><p className="T-07"><span className="isBox isComment"><span className="isUnit">담당: </span>김란주</span></p></div>
                  </div>
                  <div className="C-07">
                    <div className="C-08"><div className="C-09 isComment"></div><p className="T-04"><span className="isDate">25.01.13</span><br/>14:30</p></div>
                    <div className="C-10"><p className="T-06 isComment">이 고객은 영국에서 출발한 고객으로써, 3일 내에 세명의 사람에게 소개하지 않을시...</p><p className="T-07"><span className="isBox isComment"><span className="isUnit">작성자: </span>김유진</span></p></div>
                  </div>
                  <div className="C-07">
                    <div className="C-08"><div className="C-09 isCompletedCouncil"></div><p className="T-04"><span className="isDate">25.01.13</span><br/>14:30</p></div>
                    <div className="C-10"><p className="T-06"><span className="isStatus isCompletedCouncil">상담완료</span><span className="isRoom isHover" onMouseEnter={() => {setTickerRoom(true)}} onMouseLeave={() => {setTickerRoom(false)}}>제8상담실</span>시술신환상담</p><p className="T-07"><span className="isBox isComment"><span className="isUnit">담당: </span>김란주</span></p></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="C-01 isWide">
              <div className="C-02 styleSheet isAfterService"></div>
              <p className="T-02">후관리 현황</p>
              <div className="C-05 isShort"></div>
              <div className="C-23 isHidedScrollBar">
                <div className="C-06">
                  <div className="C-07">
                    <div className="C-08"><div className="C-09 isComment"></div><p className="T-04"><span className="isDate">25.01.13</span><br/>14:30</p><p className="T-18">56.4<span>kg</span></p></div>
                    <div className="C-10"><p className="T-06 isComment">체외충격파 러브핸들(7) :: 01] 83.2*0.0 <br/>체외충격파 복부(6) :: 02] 83.2*0.0</p><p className="T-07"><span className="isBox isComment"><span className="isUnit">작성자: </span>김유진</span><span className="isBox isComment"><span className="isUnit">기수: </span><span className="isBold">1</span></span></p></div>
                  </div>
                  <div className="C-07">
                    <div className="C-08"><div className="C-09 isComment"></div><p className="T-04"><span className="isDate">25.01.13</span><br/>14:30</p><p className="T-18">60.4<span>kg</span></p></div>
                    <div className="C-10"><p className="T-06 isComment">체외충격파 러브핸들(7) :: 01] 83.2*0.0 <br/>체외충격파 복부(6) :: 02] 83.2*0.0</p><p className="T-07"><span className="isBox isComment"><span className="isUnit">작성자: </span>김유진</span><span className="isBox isComment"><span className="isUnit">기수: </span><span className="isBold">1</span></span></p></div>
                  </div>
                  <div className="C-07">
                    <div className="C-08"><div className="C-09 isComment"></div><p className="T-04"><span className="isDate">25.01.13</span><br/>14:30</p><p className="T-18">60.4<span>kg</span></p></div>
                    <div className="C-10"><p className="T-06 isComment">체외충격파 러브핸들(7) :: 01] 83.2*0.0 <br/>체외충격파 복부(6) :: 02] 83.2*0.0</p><p className="T-07"><span className="isBox isComment"><span className="isUnit">작성자: </span>김유진</span><span className="isBox isComment"><span className="isUnit">기수: </span><span className="isBold">1</span></span></p></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="C-01 isWide">
              <div className="C-02 styleSheet isAfterEffect"></div>
              <p className="T-02">후증상 현황</p>
              <p className="T-13 isMini">최종 분석일: <span className="isDate isMini">2024.09.24</span></p>
              <p className="T-00"><span className="isTitle">Bruise:</span>5.0<span className="isUnit">%</span><span className="isStatusBar isBlue"></span><span className="isComment isBlue">낮음</span></p>
              <p className="T-00"><span className="isTitle">Biobond:</span>50.7<span className="isUnit">%</span><span className="isStatusBar isBlue"></span><span className="isComment isBlue">낮음</span></p>
              <p className="T-00"><span className="isTitle">Irregularity:</span>22.0<span className="isUnit">%</span><span className="isStatusBar isYellow"></span><span className="isComment isYellow">보통</span></p>
              <p className="T-00"><span className="isTitle">Seroma:</span>0.0<span className="isUnit">%</span><span className="isStatusBar isBlue"></span><span className="isComment isBlue">낮음</span></p>
            </div>
          </div>
          <div className="C-00">
            <div className="C-01 isWide">
              <div className="C-02 styleSheet isPoint"></div>
              <p className="T-02">실천지수 현황</p>
              <div className="T-11 isHover" onClick={() => {
                setOpenedMenuList(true);
              }}>버튼 메뉴<div className={`C-16 styleSheet`}></div></div>
              <p className="T-00"><span className="isTitle">여권번호:</span></p>
              <div className="C-25"></div>
              <div className="C-24 isHidedScrollBar">
                <div className="C-06">
                  <div className="C-07">
                    <div className="C-08"><div className="C-09 isCompleted"></div><p className="T-04"><span className="isDate">25.01.13</span><br/>14:30</p></div>
                    <div className="C-10"><p className="T-06"><span className="isStatus isCompleted">적립</span>OP더블체중실천지수</p><p className="T-07"><span className="isBox isComment"><span className="isUnit">기수: </span><span className="isBold">1</span></span><span className="isBox isComment"><span className="isUnit">지수: </span><span className="isBold">40,000</span>P</span></p></div>
                  </div>
                  <div className="C-07">
                    <div className="C-08"><div className="C-09 isCompleted"></div><p className="T-04"><span className="isDate">25.01.13</span><br/>14:30</p></div>
                    <div className="C-10"><p className="T-06"><span className="isStatus isCompleted">적립</span>2022 메이트</p><p className="T-07"><span className="isBox isComment"><span className="isUnit">기수: </span><span className="isBold">1</span></span><span className="isBox isComment"><span className="isUnit">지수: </span><span className="isBold">100,000</span>P</span></p></div>
                  </div>
                  <div className="C-07">
                    <div className="C-08"><div className="C-09 isCompletedCouncil"></div><p className="T-04"><span className="isDate">25.01.13</span><br/>14:30</p></div>
                    <div className="C-10"><p className="T-06"><span className="isStatus isCompletedCouncil">사용</span>수납적용</p><p className="T-07"><span className="isBox isComment"><span className="isUnit">기수: </span><span className="isBold">1</span></span><span className="isBox isComment"><span className="isUnit">지수: </span><span className="isBold isOrange">-319,000</span>P</span></p></div>
                  </div>
                  <div className="C-07">
                    <div className="C-08"><div className="C-09 isCompleted"></div><p className="T-04"><span className="isDate">25.01.13</span><br/>14:30</p></div>
                    <div className="C-10"><p className="T-06"><span className="isStatus isCompleted">적립</span>맴버십앱 후설문 작성</p><p className="T-07"><span className="isBox isComment"><span className="isUnit">기수: </span><span className="isBold">1</span></span><span className="isBox isComment"><span className="isUnit">지수: </span><span className="isBold">5,000</span>P</span></p></div>
                  </div>
                  <div className="C-07">
                    <div className="C-08"><div className="C-09 isCompleted"></div><p className="T-04"><span className="isDate">25.01.13</span><br/>14:30</p></div>
                    <div className="C-10"><p className="T-06"><span className="isStatus isCompleted">적립</span>성공 후기 작성 자동 적립 (OP)</p><p className="T-07"><span className="isBox isComment"><span className="isUnit">기수: </span><span className="isBold">1</span></span><span className="isBox isComment"><span className="isUnit">지수: </span><span className="isBold">1,000</span>P</span></p></div>
                  </div>
                </div>
              </div>
              <p className="T-00"><span className="isTitle">실천지수:</span>342,400<span className="isUnit">P</span></p>
              <p className="T-00"><span className="isTitle">땡큐/메이트:</span>0 / 0</p>
              <div className={`C-15 ${isOpenedMenuList ? 'isOpened' : null}`}  onClick={() => {
                setOpenedMenuList(false);
              }}></div>
              <div className={`C-14 isHidedScrollBar ${isOpenedMenuList ? 'isOpened' : null}`}>
                <p className="T-17">고객정보</p>
                <p className="T-17">고객정보 변경</p>
                <p className="T-17">고객종합 정보</p>
                <p className="T-17">구비서류 도움말</p>
                <p className="T-17">기수생성 도움말</p>
                <p className="T-17">바코드 스티커 연동</p>
                <p className="T-17">분류조회</p>
                <p className="T-17">시술/상담참조사항</p>
                <p className="T-17">업무번호등록</p>
                <p className="T-17">업무번호삭제</p>
                <p className="T-17">오렌지 클래스</p>
                <p className="T-17">의사 스케쥴</p>
                <p className="T-17">문자 메세지</p>
                <p className="T-17">저장</p>
                <p className="T-17">SO</p>
                <p className="T-17">T/F</p>
              </div>
            </div>
            <div className="C-01 isWide">
              <div className="C-02 styleSheet isTreatment"></div>
              <p className="T-02">내원정보</p>
              <p className="T-00"><span className="isTitle">시술 시작일:</span>24.11.02</p>
              <p className="T-00"><span className="isTitle">주기적 내원일:</span>24.12.02</p>
              <p className="T-00"><span className="isTitle">다음 내원일:</span></p>
              <p className="T-00"><span className="isTitle">시술 예약일:</span></p>
              <p className="T-00"><span className="isTitle">1개월 목표체중:</span>61.6<span className="isUnit">kg</span></p>
              <p className="T-00"><span className="isTitle">달성체중:</span>62.8<span className="isUnit">kg</span></p>
            </div>
            {/* <div className="C-01 isWide">
              <div className="C-02 styleSheet isPrescription"></div>
              <p className="T-02">처방정보</p>
              <div className="T-11 isHover" onClick={() => {
                setOpenedPredictionList(true);
              }}>처방목록<div className={`C-16 styleSheet`}></div></div>
              <p className="T-00"><span className="isTitle">무료처방 유효일:</span>25.04.12</p>
              <p className="T-00"><span className="isTitle">전 기수:</span></p>
              <p className="T-00"><span className="isTitle">마지막 처방일:</span></p>
              <p className="T-00"><span className="isTitle">처방일수 합:</span></p>
              <p className="T-00 isPadding"><span className="isTitle">남은 일수:</span><input type="numeric" defaultValue={0}></input><span className="isSubmit isHover">수정</span></p>
              <div className={`C-15 ${isOpenedPredictionList ? 'isOpened' : null}`}  onClick={() => {
                setOpenedPredictionList(false);
              }}></div>
              <div className={`C-14 isHidedScrollBar ${isOpenedPredictionList ? 'isOpened' : null}`}>
                <p className="T-10">간장 공장 공장장은 간 공장장이고, 된장 공장 공장장은 된 공장장이다.</p>
              </div>
            </div> */}
            <div className="C-01 isWide">
              <div className="C-02 styleSheet isPurchase"></div>
              <p className="T-02">수납정보</p>
              <p className="T-00 isBold"><span className="isTitle">총금액:</span>170,000<span className="isUnit">원</span></p>
              <p className="T-00 isBold isBlue"><span className="isTitle">선수금:</span>0</p>
              <p className="T-00 isBold isGreen"><span className="isTitle">수납금:</span>170,000<span className="isUnit">원</span></p>
              <p className="T-00 isBold isYellow"><span className="isTitle">DC금액:</span>0</p>
              <p className="T-00 isBold isOrange"><span className="isTitle">미수금:</span>0</p>
            </div>
          </div>
        </section> : null}
      </main>
      <div ref={asideRightRef} className={`aside-right isHidedScrollBar ${isOpenedRightAside ? 'isOpened' : null}`}>
        <p className="leading-10 font-bold pl-2 pb-2 text-sm">지점 현황</p>
        <section className="S-02">
          <div className="C-00 isHover styleSheet isLeft"></div>
          <div className="C-00 isHover isToday">
            <p className="T-00">오늘</p>
          </div>
          <div className="C-00 isHover styleSheet isRight"></div>
        </section>
        <section className="S-01">
          <div className="C-01">
            <div className="C-02 isHover" style={{opacity:.25}}>
              <div className="C-03"></div>
              <p className="T-00">일</p>
              <p className="T-01">05</p>
            </div>
            <div className="C-02 isHover" style={{opacity:.5}}>
              <div className="C-03"></div>
              <p className="T-00">월</p>
              <p className="T-01">06</p>
            </div>
            <div className="C-02 isHover" style={{opacity:.75}}>
              <div className="C-03"></div>
              <p className="T-00">화</p>
              <p className="T-01">07</p>
            </div>
            <div className="C-02 isHover isSelected">
              <div className="C-03"></div>
              <p className="T-00">수</p>
              <p className="T-01">08</p>
            </div>
            <div className="C-02 isHover" style={{opacity:.75}}>
              <div className="C-03"></div>
              <p className="T-00">목</p>
              <p className="T-01">09</p>
            </div>
            <div className="C-02 isHover" style={{opacity:.5}}>
              <div className="C-03"></div>
              <p className="T-00">금</p>
              <p className="T-01">10</p>
            </div>
            <div className="C-02 isHover" style={{opacity:.25}}>
              <div className="C-03"></div>
              <p className="T-00">토</p>
              <p className="T-01">11</p>
            </div>
          </div>
          <div className="C-00">
            <p className="T-02">선택 날짜: <span>2025.01.08</span></p>
          </div>
        </section>
        <section className="S-00">
          <p className="T-00 font-extralight">진료 현황</p>
          <div className="C-06">
            <p className="T-07 isHover isTreatment isSelected">진료중</p><p className="T-07 isHover isCompleted isSelected">완료</p><p className="T-07 isHover isReserved isSelected">예약</p><p className="T-07 isHover isWaiting">대기중</p>
          </div>
          <div className="C-05"></div>
          <div className="C-00">
            <div className="C-08">
              <div className="C-01">
                <div className="C-03">
                  <div className="C-02 isReserved"></div>
                  <p className="T-01">14:30</p>
                </div>
                <div className="C-04">
                  <p className="T-02"><span className="isName">문성후</span><span className="isPsentry" onMouseEnter={() => {setTickerPsentry(true)}} onMouseLeave={() => {setTickerPsentry(false)}}>360081149</span><span className="isBox isGreen">신환</span><span className="isLicence"><span className="styleSheet isIcon"></span>971030-2110411</span></p>
                  <p className="T-03"><span className="isStatus isReserved">예약</span>체외충격파 1</p>
                  <p className="T-04"><span className="isBox isDoctor" onMouseEnter={() => {setTickerDoctor(true)}} onMouseLeave={() => {setTickerDoctor(false)}}><span className="isPortrait Idrus"></span>이유섭<span className="isUnit">담당의</span></span><span className="isBox isComment"><span className="isUnit">등록일: </span>24.09.23</span><span className="isBox isComment"><span className="isUnit">연락처: </span>010-9054-3591</span><span className="isBox isComment"><span className="isUnit">참조: </span>팔/등메/서포터/skl</span></p>
                </div>
              </div>
              <div className="C-01">
                <div className="C-03">
                  <div className="C-02 isReserved"></div>
                  <p className="T-01">14:00</p>
                </div>
                <div className="C-04">
                  <p className="T-02"><span className="isName">문성후</span><span className="isPsentry" onMouseEnter={() => {setTickerPsentry(true)}} onMouseLeave={() => {setTickerPsentry(false)}}>360081149</span><span className="isBox isGreen">신환</span><span className="isLicence"><span className="styleSheet isIcon"></span>971030-2110411</span></p>
                  <p className="T-03"><span className="isStatus isReserved">예약</span>체외충격파 1</p>
                  <p className="T-04"><span className="isBox isDoctor" onMouseEnter={() => {setTickerDoctor(true)}} onMouseLeave={() => {setTickerDoctor(false)}}><span className="isPortrait Idrus"></span>이유섭<span className="isUnit">담당의</span></span><span className="isBox isComment"><span className="isUnit">등록일: </span>24.09.23</span><span className="isBox isComment"><span className="isUnit">연락처: </span>010-9054-3591</span><span className="isBox isComment"><span className="isUnit">참조: </span>팔/등메/서포터/skl</span></p>
                </div>
              </div>
              <div className="C-01">
                <div className="C-03">
                  <div className="C-02 isNow"></div>
                  <p className="T-01">13:26</p>
                </div>
                <div className="C-04">
                  <p className="T-02"><span className="isName">김인나</span><span className="isPsentry" onMouseEnter={() => {setTickerPsentry(true)}} onMouseLeave={() => {setTickerPsentry(false)}}>360076012</span><span className="isBox isOrange">재환</span><span className="isLicence"><span className="styleSheet isIcon"></span>971030-2110411</span></p>
                  <p className="T-03"><span className="isStatus isNow">진료중</span><span className="isRoom isHover" onMouseEnter={() => {setTickerRoom(true)}} onMouseLeave={() => {setTickerRoom(false)}}>제2진료실</span>R.F 고주파</p>
                  <p className="T-04"><span className="isBox isComment"><span className="isUnit">담당: </span>김란주</span><span className="isBox isComment"><span className="isUnit">등록일: </span>25.01.08</span><span className="isBox isComment"><span className="isUnit">연락처: </span>010-9054-3591</span></p>
                </div>
              </div>
              <div className="C-01">
                <div className="C-03">
                  <div className="C-02 isCompleted"></div>
                  <p className="T-01">13:02</p>
                </div>
                <div className="C-04">
                  <p className="T-02"><span className="isName">장미령</span><span className="isPsentry" onMouseEnter={() => {setTickerPsentry(true)}} onMouseLeave={() => {setTickerPsentry(false)}}>360081159</span><span className="isBox isGreen">신환</span><span className="isLicence"><span className="styleSheet isIcon"></span>971030-2110411</span></p>
                  <p className="T-03"><span className="isStatus isCompleted">완료</span><span className="isRoom isHover" onMouseEnter={() => {setTickerRoom(true)}} onMouseLeave={() => {setTickerRoom(false)}}>제4진료실</span>지방흡입술</p>
                  <p className="T-04"><span className="isBox isDoctor" onMouseEnter={() => {setTickerDoctor(true)}} onMouseLeave={() => {setTickerDoctor(false)}}><span className="isPortrait Ipsalm"></span>김현주<span className="isUnit">담당의</span></span><span className="isBox isComment"><span className="isUnit">등록일: </span>24.09.23</span><span className="isBox isComment"><span className="isUnit">연락처: </span>010-9054-3591</span><span className="isBox isComment"><span className="isUnit">참조: </span>장액종 경과</span></p>
                </div>
              </div>
              <div className="C-01">
                <div className="C-03">
                  <div className="C-02 isCompleted"></div>
                  <p className="T-01">12:52</p>
                </div>
                <div className="C-04">
                  <p className="T-02"><span className="isName">장미령</span><span className="isPsentry" onMouseEnter={() => {setTickerPsentry(true)}} onMouseLeave={() => {setTickerPsentry(false)}}>360081159</span><span className="isBox isGreen">신환</span><span className="isLicence"><span className="styleSheet isIcon"></span>971030-2110411</span></p>
                  <p className="T-03"><span className="isStatus isCompleted">완료</span><span className="isRoom isHover" onMouseEnter={() => {setTickerRoom(true)}} onMouseLeave={() => {setTickerRoom(false)}}>제4진료실</span>지방흡입술</p>
                  <p className="T-04"><span className="isBox isDoctor" onMouseEnter={() => {setTickerDoctor(true)}} onMouseLeave={() => {setTickerDoctor(false)}}><span className="isPortrait Ipsalm"></span>김현주<span className="isUnit">담당의</span></span><span className="isBox isComment"><span className="isUnit">등록일: </span>24.09.23</span><span className="isBox isComment"><span className="isUnit">연락처: </span>010-9054-3591</span><span className="isBox isComment"><span className="isUnit">참조: </span>장액종 경과</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="C-07">
            <div className="C-09 isLams isHover">
              <div className="C-10 styleSheet"></div>
              <p className="T-05"><span>4</span>건</p>
              <p className="T-06">누적 시술</p>
              <div className="C-11 styleSheet"></div>
            </div>
            <div className="C-09 isSurgery isHover">
              <div className="C-10 styleSheet"></div>
              <p className="T-05"><span>12</span>건</p>
              <p className="T-06">누적 O.P</p>
              <div className="C-11 styleSheet"></div>
            </div>
          </div>
        </section>
        <section className="S-00 isCounsel">
          <p className="T-00 font-extralight">상담 현황</p>
          <div className="C-06">
            <p className="T-07 isHover isTreatment isSelected">상담중</p><p className="T-07 isHover isCompleted isSelected">완료</p><p className="T-07 isHover isReserved isSelected">예약</p><p className="T-07 isHover isWaiting">대기중</p>
          </div>
          <div className="C-05"></div>
          <div className="C-00">
            <div className="C-01">
              <div className="C-03">
                <div className="C-02 isReserved"></div>
                <p className="T-01">14:00</p>
              </div>
              <div className="C-04">
                <p className="T-02"><span className="isName">문성후</span><span className="isPsentry" onMouseEnter={() => {setTickerPsentry(true)}} onMouseLeave={() => {setTickerPsentry(false)}}>360081149</span><span className="isBox isGreen">신환</span><span className="isLicence"><span className="styleSheet isIcon"></span>971030-2110411</span></p>
                <p className="T-03"><span className="isStatus isReserved">예약</span>시술신환상담</p>
                <p className="T-04"><span className="isBox isComment"><span className="isUnit">등록일: </span>24.09.23</span><span className="isBox isComment"><span className="isUnit">연락처: </span>010-9054-3591</span></p>
                <div></div>
              </div>
            </div>
            <div className="C-01">
              <div className="C-03">
                <div className="C-02 isWaiting"></div>
                <p className="T-01">14:00</p>
              </div>
              <div className="C-04">
                <p className="T-02"><span className="isName">문성후</span><span className="isPsentry" onMouseEnter={() => {setTickerPsentry(true)}} onMouseLeave={() => {setTickerPsentry(false)}}>360081149</span><span className="isBox isGreen">신환</span><span className="isLicence"><span className="styleSheet isIcon"></span>971030-2110411</span></p>
                <p className="T-03"><span className="isStatus isWaiting">대기중</span>시술신환상담</p>
                <p className="T-04"><span className="isBox isComment"><span className="isUnit">등록일: </span>24.09.23</span><span className="isBox isComment"><span className="isUnit">연락처: </span>010-9054-3591</span></p>
                <div></div>
              </div>
            </div>
            <div className="C-01">
              <div className="C-03">
                <div className="C-02 isNow"></div>
                <p className="T-01">13:26</p>
              </div>
              <div className="C-04">
                <p className="T-02"><span className="isName">김인나</span><span className="isPsentry" onMouseEnter={() => {setTickerPsentry(true)}} onMouseLeave={() => {setTickerPsentry(false)}}>360076012</span><span className="isBox isOrange">재환</span><span className="isLicence"><span className="styleSheet isIcon"></span>971030-2110411</span></p>
                <p className="T-03"><span className="isStatus isNow">상담중</span><span className="isRoom isHover" onMouseEnter={() => {setTickerRoom(true)}} onMouseLeave={() => {setTickerRoom(false)}}>제8상담실</span>시술재환상담</p>
                <p className="T-04"><span className="isBox isComment"><span className="isUnit">담당: </span>김란주</span><span className="isBox isComment"><span className="isUnit">등록일: </span>25.01.08</span><span className="isBox isComment"><span className="isUnit">연락처: </span>010-9054-3591</span></p>
              </div>
            </div>
            <div className="C-01">
              <div className="C-03">
                <div className="C-02 isCompleted"></div>
                <p className="T-01">13:02</p>
              </div>
              <div className="C-04">
                <p className="T-02"><span className="isName">장미령</span><span className="isPsentry" onMouseEnter={() => {setTickerPsentry(true)}} onMouseLeave={() => {setTickerPsentry(false)}}>360081159</span><span className="isBox isGreen">신환</span><span className="isLicence"><span className="styleSheet isIcon"></span>971030-2110411</span></p>
                <p className="T-03"><span className="isStatus isCompleted">완료</span><span className="isRoom isHover" onMouseEnter={() => {setTickerRoom(true)}} onMouseLeave={() => {setTickerRoom(false)}}>제4상담실</span>시술신환상담</p>
                <p className="T-04"><span className="isBox isComment"><span className="isUnit">담당: </span>김란주</span><span className="isBox isComment"><span className="isUnit">등록일: </span>24.09.23</span><span className="isBox isComment"><span className="isUnit">연락처: </span>010-9054-3591</span><span className="isBox isComment"><span className="isUnit">참조: </span>장액종 경과</span></p>
                <div></div>
              </div>
            </div>
          </div>
        </section>
        <section className="S-03">
          <p className="T-00 isHover isSelected">지점<br/>현황</p>
          <p className="T-00 isHover">접수<br/>현황</p>
          <p className="T-00 isHover">완료<br/>(22)</p>
        </section>
      </div>
      <aside className={`m-3 p-5 ${isOpenedLv2 ? 'isOpenedLv2': isOpenedLv1 ? 'isOpenedLv1' : null} ${isHoverMain ? 'isHoverMain' : null} isHidedScrollBar ${isOpenedLeftAside ? 'isOpened':null}`} style={{height: height}}>
        <h1 className="styleSheet isHover" style={{backgroundPositionX:-25}}>365mcEMR</h1>
        <nav className="mt-8">
          <ol>
            {arrayTopMenu.map((item, index) => (
              <li key={index} className={`C-01 m-2 my-4 ${selectedLv0Index == index ? 'isSelected' : null}`} onMouseEnter={() => setOpenedLv1(true)} onMouseLeave={() => setOpenedLv1(false)}><div className={`C-00 m-1 isIcon styleSheet ${item.style} ${selectedLv0Index == index ? 'isSelected' : null}`}></div><p className="T-00">{item.lv0}</p>{item.lv1 && item.lv1.length > 0 ? <div className="C-03">
                <ol className="ml-4 C-04">
                  {item.lv1.map((subItem, subIndex) => (
                    <li key={subIndex} className={`C-02 isHover ${selectedLv0Index == index && selectedLv1Index == subIndex? 'isSelected' : null}`}><div className={`styleSheet C-05 isMiniIcon ${subItem.style}`}></div><p className="T-01">{subItem.name}</p></li>
                  ))}
                </ol>
              </div> : null}</li>
            ))}
          </ol>
        </nav>
      </aside>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
      <p className="ticker isPsentry"
        style={{
          opacity: isTickerPsentry ? 1 : 0,
          top: position.y+10,
          left: position.x+20,
        }}>해당 고객번호로 검색</p>
      <p className="ticker isDoctor"
        style={{
          opacity: isTickerDoctor ? 1 : 0,
          top: position.y+10,
          left: position.x+20,
        }}>해당 원장님의 일정 보기</p>
      <p className="ticker isRoom"
        style={{
          opacity: isTickerRoom ? 1 : 0,
          top: position.y+10,
          left: position.x+20,
        }}>해당 진료실의 일정 보기</p>
    </div>
  );
}
