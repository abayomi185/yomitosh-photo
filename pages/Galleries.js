import Link from 'next/link'
import Layout from '.';
import { AnimatePresence } from 'framer-motion';

export default function Galleries() {
    return (
        <Layout>
            <AnimatePresence exitBeforeEnter>
                <div>
                    <h1>This is my domain!</h1>
                </div>
            </AnimatePresence>

        </Layout>
    )
}