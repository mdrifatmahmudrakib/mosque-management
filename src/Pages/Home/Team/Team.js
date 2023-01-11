import React, { useEffect, useState } from 'react';
import "./Team.css";


import TeamScolar from '../../Scolar/TeamScolar';
import SingleTeam from './SingleTeam';
import Experts from '../../../hooks/Experts';
import Imam from './Imam';
import Khatib from './Khatib';
import Khadem from './Khadem';
import Chairman from './Chairman';
import SecretaryGeneral from './SecretaryGeneral';
import Member from './Member';
import Muyajjem from './Muyajjem';
const Team = () => {


	const [experts] = Experts();

	return (

		<div>
			{/* <section className="container pt-5 pb-5 ">

				<div className="mini_title">
					<p className="text-center">Our Expert</p>
				</div>

				<div className="text-center">
					<h5 className="main_heading">Islamic Scholars</h5>
				</div>

				<div className="d-flex justify-content-center mt-4">
					<div className="heading_line"></div>
				</div>
				<p className="text-center help_section_body_text mt-3">
					Highly Qualified Team Supervises psum dolor sit amet, consectetur adipisicing elit, sed do <br></br> eiusmod
					tempor incididunt ut labore et dolore magna aliqua.
				</p>

				<div className="row mt-5 d-flex justify-content-center text-center poppins">





					{
						experts.map(expert => <SingleTeam
							key={expert._id}
							expert={expert}
						></SingleTeam>)
					}



				</div>
			</section> */}
			<section>
				<TeamScolar></TeamScolar>
				<Imam></Imam>
				<Muyajjem></Muyajjem>
				<Khatib></Khatib>
				<Khadem></Khadem>
				<Chairman></Chairman>
				<SecretaryGeneral></SecretaryGeneral>
				<Member></Member>
			</section>
		</div>
	);
};

export default Team;