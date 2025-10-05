import aws from '../app/assets/svg/skills/aws.svg';
import html from '../app/assets/svg/skills/html.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import azure from '../app/assets/svg/skills/azure.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import c from '../app/assets/svg/skills/c.svg';
import cplusplus from '../app/assets/svg/skills/cplusplus.svg';
import css from '../app/assets/svg/skills/css.svg';
import django from '../app/assets/svg/skills/django.svg';
import git from '../app/assets/svg/skills/git.svg';
import java from '../app/assets/svg/skills/java.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import numpy from '../app/assets/svg/skills/numpy.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import python from '../app/assets/svg/skills/python.svg';
import react from '../app/assets/svg/skills/react.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import tensorflow from '../app/assets/svg/skills/tensorflow.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import vitejs from '../app/assets/svg/skills/vitejs.svg';
import wordpress from '../app/assets/svg/skills/wordpress.svg';

import pandas from '../app/assets/svg/skills/pandas.svg';
import scikitlearn from '../app/assets/svg/skills/scikit-learn.svg';
import sqlalchemy from '../app/assets/svg/skills/sqlalchemy.svg'



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'react':
      return react;
    case 'typescript':
      return typescript;
    case 'bootstrap':
      return bootstrap;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'java':
      return java;
    case 'python':
      return python;
    case 'aws':
      return aws;
    case 'django':
      return django;
    case 'gimp':
      return gimp;
    case 'git':
      return git;
    case 'numpy':
      return numpy;
    case 'tensorflow':
      return tensorflow;
    case 'wordpress':
      return wordpress;
    case 'azure':
      return azure;
    case 'pandas':
      return pandas;
    case 'sklearn':
      return scikitlearn;
    case 'sqlalchemy':
      return sqlalchemy;
    case 'next js':
      return nextJS;
    default:
      break;
  }
}
