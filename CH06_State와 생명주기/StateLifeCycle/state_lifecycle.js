/**
 * 스테이트(state)?
 * 
 * => 리액트 컴포넌트의 변경 가능한 데이터(개발자 정의)
 * => 실체:자바스크립트 객체 {key:value,,,,}
 * => state가 변경될 경우 컴포넌트가 재렌더링된다.
 * 
 * 클래스형 컴포넌트:생성자에서 생성
 * 함수형 컴포넌트:리액트 Hook을 사용하여 생성
 */

class LikeButton extends React.Component{

  constructor(props){
    super(props);
    //생성자에서 모든 state를 한 번에 정의
    this.state={liked:false}
  }

  render(){
    return(
      <div>
        {
          this.setState({liked:true})
        }
      </div>
    );
  }
}

/**
 * 생명주기(LifeCycle)
 * 
 * Mounting  ------------->  Updating  ----------->  Unmounting
 * (컴포넌트 생성)        (컴포넌트 수정)          (컴포넌트 소멸)
 * ComponentDidMound()  ComponentDidUpdate()  ComponentWillUnmount
 */