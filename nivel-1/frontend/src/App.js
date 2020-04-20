import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState([]);
    // Array de dependencias para verificar se altera a []
    useEffect(() => {
        api.get('projects').then((response) => {
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        // setProjects([...projects, `Novo projeto ${Date.now()}`])
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'Jorge',
        });
        const project = response.data;
        setProjects([...projects, project])
    }
    return (
        <>
            <Header title="Homepage" />

            <ul>
                {projects.map((project) => (
                    <li key={project.id}>{project.title}</li>
                ))}
            </ul>
            <button type="button" onClick={handleAddProject}>
                Adicionar Projeto
            </button>
        </>
    );
}

export default App;
