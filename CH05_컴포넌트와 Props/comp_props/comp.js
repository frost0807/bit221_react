/**
 * 컴포넌트
 */

/**
 * 함수 컴포넌트
 */

function Welcome1(props){
  return(
    <h1>Hello, {props.name}</h1>
  )
}

/**
 * 클래스 컴포넌트
 */
//class는 내부에 props가 이미 생성되어 있어 파라미터로 써 줄 필요가없다.
class Welcome2 extends React.Component{

  render(){
    return <h1>Hello, {this.props.name}</h1>
  }
}

//함수나 클래스는 대문자로 시작해야 dom tag로 인식하지 않는다.
<Welcome1 name="철수"></Welcome1>