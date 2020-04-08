import React, { useState } from "react";
import { Link } from 'gatsby';
import Style from '../styles/home.module.css';

export default ({ data }) => {
    const nodes = [
	{name: "B.ARCH", className: 'barch', slug: 'b-arch', thumbnailCount: 8, thumbnails: []},
	{name: "M.ARCH", className: 'march', slug: 'm-arch', thumbnailCount: 7, thumbnails: []},
	{name: "MUD", className: 'mud', slug: 'mud', thumbnailCount: 9, thumbnails: []},
	{name: "MAD", className: 'mad', slug: 'mad', thumbnailCount: 10, thumbnails: []},
    ];

    for (let i = 0; i < nodes.length; i++) {
	for (let j = 0; j < nodes[i].thumbnailCount; j++) {
	    nodes[i].thumbnails.push(
		<div className={Style.thumbnail}
		key={`${i + j}col ${nodes[i].name}`}
		    style={{backgroundColor: `hsl(${i*10+j*10+nodes[i].thumbnailCount}, 55%, 85%)`}}
		>
		    {j+1}
		</div>
	    );
	}
    }

    const [focus, setFocus] = useState('all');

    return (
	    <div>
		<div className={Style.thesisBannerContainer}>
		    <h1 className={Style.thesisBanner}>CMU SoA Thesis</h1>
		</div>
		<div className={Style.thesisHomeContainer}>
		    {nodes.map((node, index) => (
			    <div key={index}
				className={Style.thesisSection}
				style={{
				    animationDelay: `${index * 0.1}s`,
				}}>
			    <Link  to={'/home'} className={Style.thesisSectionLink}>
				<h1 className={Style.thesisSectionTitle} >{node.name}</h1>
			    </Link>

			    <div className={Style.thumbnailContainer}>
				{node.thumbnails}
			    </div>
			</div>
		    ))}
		</div>
		<img alt="SoA Logo" src="/soa.png" className={Style.soaLogo} />
	    </div>
    );
}
