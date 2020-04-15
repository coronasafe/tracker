import React from 'react';
import { useRoutes, navigate } from 'hookrouter';
import NavBar from '../components/Navbars/NavBar';
import CreateSuspect from '../components/NewSuspect/CreateSuspect';
import SuspectDetails from '../components/NewSuspect/SuspectDetails';
import ViewSuspects from '../components/Dashboard/ViewSuspects';
import UserAssign from '../components/Account/UserAssign';
import ViewSuspectDetails from '../components/Dashboard/view-suspect-details';

const routes = {
	'/': () => <div className='h-screen flex justify-center py-16'>Home</div>,
	'/suspect/create': () => <CreateSuspect />,
	'/suspect/details': () => <SuspectDetails />,
	'/suspect/view': () => <ViewSuspects />,
	'/create-user': () => <UserAssign />,
	'/suspect/:suspectId': ({suspectId}) => <ViewSuspectDetails suspectId={suspectId}/>,
};

const AppRouter = () => {
	const pages = useRoutes(routes);
	!pages && navigate("/suspect/view")
	return (
		<div className="bg-gray-200">
			<NavBar />
			{pages}
			{!pages && (
				<div className='h-screen flex justify-center py-16'>
					Error 404: Page not found
				</div>
			)}
		</div>
	);
};

export default AppRouter;
