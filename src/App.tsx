import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/loader/Loader';
import SharedLayout from './components/sharedLayout/SharedLayout';
import Courses from './pages/courses/Courses';
const Home = lazy(() => import('./pages/home/Home'));
const EmptyPage = lazy(() => import('./pages/emptyPage/EmptyPage'));

function App() {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="/courses" element={<Courses />} />
					<Route path="*" element={<EmptyPage />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
