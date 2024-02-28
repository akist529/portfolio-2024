import styles from './skills.module.scss';
import Skill from '../skill/skill';
import HTML from '@/public/html.webp';
import CSS from '@/public/css.webp';
import JavaScript from '@/public/javascript.webp';
import TypeScript from '@/public/typescript.webp';
import SASS from '@/public/sass.webp';
import Bootstrap from '@/public/bootstrap.webp';
import Vuetify from '@/public/vuetify.webp';
import Chakra from '@/public/chakra.webp';
import React from '@/public/react.webp';
import Next from '@/public/nextjs.webp';
import Redux from '@/public/redux.webp';
import Vue from '@/public/vue.webp';
import Angular from '@/public/angular.webp';
import Pinia from '@/public/pinia.webp';
import Tailwind from '@/public/tailwind.webp';
import Node from '@/public/node.webp';
import Express from '@/public/express.webp';
import Mongo from '@/public/mongo.webp';
import MySQL from '@/public/mysql.webp';
import Strapi from '@/public/strapi.webp';
import Redis from '@/public/redis.webp';
import Postman from '@/public/postman.webp';
import Python from '@/public/python.webp';
import Django from '@/public/django.webp';
import Git from '@/public/git.webp';
import Github from '@/public/github.webp';
import NPM from '@/public/npm.webp';
import Webpack from '@/public/webpack.webp';

export default function Skills () {
    return (
        <div id='skills' className={styles.skills}>
            <h1>Skills</h1>
            <div className={styles.group}>
                <h2>Front End</h2>
                <ul className={styles.list}>
                    <Skill skill='HTML' icon={HTML} w={29} h={32} />
                    <Skill skill='CSS' icon={CSS} w={28} h={32} />
                    <Skill skill='JavaScript' icon={JavaScript} w={32} h={32} />
                    <Skill skill='TypeScript' icon={TypeScript} w={32} h={32} />
                    <Skill skill='React' icon={React} w={32} h={28} />
                    <Skill skill='Next.js' icon={Next} w={32} h={32} invertColor={true} />
                    <Skill skill='SASS' icon={SASS} w={32} h={24} />
                    <Skill skill='Bootstrap' icon={Bootstrap} w={32} h={26} />
                    <Skill skill='Vuetify' icon={Vuetify} w={28} h={32} />
                    <Skill skill='Chakra UI' icon={Chakra} w={32} h={32} invertColor={true} />
                    <Skill skill='Redux' icon={Redux} w={32} h={30} />
                    <Skill skill='Vue' icon={Vue} w={32} h={28} />
                    <Skill skill='Angular' icon={Angular} w={30} h={32} />
                    <Skill skill='Pinia' icon={Pinia} w={21} h={32} />
                    <Skill skill='Tailwind' icon={Tailwind} w={32} h={19} />
                </ul>
            </div>
            <div className={styles.group}>
                <h2>Back End</h2>
                <ul className={styles.list}>
                    <Skill skill='Node.js' icon={Node} w={28} h={32} />
                    <Skill skill='Express' icon={Express} w={32} h={19} invertColor={true} />
                    <Skill skill='Python' icon={Python} w={32} h={32} />
                    <Skill skill='Django' icon={Django} w={32} h={32} />
                    <Skill skill='MongoDB' icon={Mongo} w={32} h={32} />
                    <Skill skill='MySQL' icon={MySQL} w={32} h={31} />
                    <Skill skill='Redis' icon={Redis} w={32} h={27} />
                    <Skill skill='Strapi' icon={Strapi} w={32} h={32} />
                    <Skill skill='Postman' icon={Postman} w={32} h={32} />
                </ul>
            </div>
            <div className={styles.group}>
                <h2>Tools</h2>
                <ul className={styles.list}>
                    <Skill skill='Git' icon={Git} w={32} h={32} />
                    <Skill skill='Github' icon={Github} w={32} h={31} invertColor={true} />
                    <Skill skill='NPM' icon={NPM} w={32} h={32} />
                    <Skill skill='Webpack' icon={Webpack} w={28} h={32} />
                </ul>
            </div>
        </div>
    );
}
