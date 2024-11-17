
import Comp1 from '@/components/01.component';
import Comp2, { AppContextWrapper } from '@/components/02.component';
import Comp3, { UserInfoContextWrapper } from '@/components/03.component';


function App() {

  return (
    <>
      <h1>useContext</h1>
      <Comp1></Comp1>
      <hr />
      <AppContextWrapper>
        <Comp2></Comp2>
      </AppContextWrapper>
      <hr />
      <UserInfoContextWrapper>
        <Comp3></Comp3>
      </UserInfoContextWrapper>
    </>
  )
}

export default App
