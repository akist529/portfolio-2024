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

export default function Skills () {
    return (
        <div className={styles.skills}>
            <h1>Skills</h1>
            <div className={styles.group}>
                <h2>Front End</h2>
                <ul className={styles.list}>
                    <Skill skill='HTML' icon={HTML} w={87} h={96} />
                    <Skill skill='CSS' icon={CSS} w={85} h={96} />
                    <Skill skill='JavaScript' icon={JavaScript} w={96} h={96} />
                    <Skill skill='TypeScript' icon={TypeScript} w={96} h={96} />
                    <Skill skill='React' icon={React} w={96} h={85} />
                    <Skill skill='Next.js' icon={Next} w={96} h={96} invertColor={true} />
                    <Skill skill='SASS' icon={SASS} w={96} h={72} />
                    <Skill skill='Bootstrap' icon={Bootstrap} w={96} h={77} />
                    <Skill skill='Vuetify' icon={Vuetify} w={84} h={96} />
                    <Skill skill='Chakra UI' icon={Chakra} w={96} h={96} invertColor={true} />
                    <Skill skill='Redux' icon={Redux} w={96} h={91} />
                    <Skill skill='Vue' icon={Vue} w={96} h={83} />
                    <Skill skill='Angular' icon={Angular} w={89} h={96} />
                    <Skill skill='Pinia' icon={Pinia} w={64} h={96} />
                    <Skill skill='Tailwind' icon={Tailwind} w={96} h={58} />
                </ul>
            </div>
            <div className={styles.group}>
                <h2>Back End</h2>
                <ul className={styles.list}>
                    <Skill skill='Node.js' icon={Node} w={85} h={96} />
                    <Skill skill='Express.js' icon={Express} w={96} h={56} invertColor={true} />
                    <Skill skill='Python' icon={Python} w={95} h={96} />
                    <Skill skill='Django' icon={Django} w={96} h={96} />
                    <Skill skill='MongoDB' icon={Mongo} w={96} h={96} />
                    <Skill skill='MySQL' icon={MySQL} w={96} h={94} />
                    <Skill skill='Redis' icon={Redis} w={96} h={82} />
                    <Skill skill='Strapi' icon={Strapi} w={96} h={96} />
                    <Skill skill='Postman' icon={Postman} w={96} h={96} />
                </ul>
            </div>
            <div className={styles.group}>
                <h2>Tools</h2>
                <ul className={styles.list}>
                    <Skill skill='Git' icon={Git} w={96} h={96} />
                    <Skill skill='Github' icon={Github} w={96} h={94} invertColor={true} />
                </ul>
            </div>
        </div>
    );
}
