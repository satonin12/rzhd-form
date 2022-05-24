import React from 'react';

import RZHDPage from './components/Pages/RZHD/RZHDPage';
import MainLayout from './layout/MainLayout/MainLayout';
import Header from "./components/Header/Header";

const App = () => {
	return (
		<MainLayout>
			<Header />
			<RZHDPage/>
		</MainLayout>
	)
};

export default App;
