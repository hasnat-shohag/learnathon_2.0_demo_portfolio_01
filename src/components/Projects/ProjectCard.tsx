import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

interface Project {
	title: string;
	imageSrc: string;
	description: string;
	skills: string[];
	demo: string;
	source: string;
}

interface ProjectCardProps {
	project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	project: { title, imageSrc, description, skills, demo, source },
}) => {
	return (
		<div className={styles.container}>
			<img
				src={getImageUrl(imageSrc)}
				alt={`Image of ${title}`}
				className={styles.image}
			/>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.description}>{description}</p>
			<ul className={styles.skills}>
				{skills.map((skill, id) => (
					<li className={styles.skill} key={id}>
						{skill}
					</li>
				))}
			</ul>
			<div className="btngroup" style={{display: "flex", justifyContent: "space-between", marginTop: "10px"}}>
				<a href={demo} className={styles.button}>
					Demo
				</a>
				<a href={source} className={styles.button}>
					Source
				</a>
			</div>
		</div>
	);
};
export default ProjectCard;
