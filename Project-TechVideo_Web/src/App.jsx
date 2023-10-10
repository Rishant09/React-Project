import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { MainComponent } from './components/main-component/main-component';
import { Login } from './components/login/login';
import { Unregistered } from './components/unregistered/unregistered';
import { Register } from './components/register/register';
import { VideosHome } from './components/videos-home/videos-home';
import { AdminHome } from './components/admin-home/admin-home';
import { AdminLogin } from './components/admin-login/admin-login';
import { AddVideo } from './components/add-video/add-vidoe';
import { ViewVideo } from './components/view-video/view-video';
import { EditVideo } from './components/edit-video/edit-video';
import { DeleteVideo } from './components/delete-video/delete-video';
import { useCookies } from 'react-cookie';

function App() {
  const [cookies] = useCookies();


  return (
    <div className='container-fluid'>
       <BrowserRouter>
       <header className='d-flex mt-2 justify-content-between p-2 bg-dark text-white'>
         <div>
           <h2><Link className='text-white text-decoration-none' to="/">Tech-Videos</Link></h2>
         </div>
         <div>
            {
              cookies['user-id']==undefined ?
               <div>
                 <Link to="/login" className='btn btn-danger'>User Sigin</Link>
                  <Link to="/admin-login" className='btn btn-danger ms-2'>Admin Signin</Link>
              </div> :
              <div>
                 {cookies['user-id']}
              </div>
            }
         </div>
       </header>
       <section className='d-flex' style={{height: '100vh'}}>
         <div>
            <Routes>
                <Route path='/' element={<MainComponent />} />
                <Route path='/login' element={<Login />} />
                <Route path='/unregister' element={<Unregistered />} />
                <Route path='/register' element={<Register />} />
                <Route path='/videos' element={<VideosHome />} />
                <Route path='/admin-home' element={<AdminHome />} />
                <Route path='/admin-login' element={<AdminLogin />} />
                <Route path='/add-video' element={<AddVideo />} />
                <Route path='/view-video/:id' element={<ViewVideo />} />
                <Route path='/edit-video/:id' element={<EditVideo />} />
                <Route path='/delete-video/:id' element={<DeleteVideo />} />
            </Routes>
         </div>
       </section>
       </BrowserRouter>
    </div>
  );
}

export default App;
