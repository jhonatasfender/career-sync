import { t } from "@lingui/macro"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion";
import { ScrollArea } from "@reactive-resume/ui";
import { SectionBase } from "../../builder/sidebars/left/sections/shared/section-base";

export const ProjectsPage = () => {
    return (
        <>
            <Helmet>
                <title>
                    {t`Projects`} - {t`Reactive Resume`}
                </title>
            </Helmet>

            <motion.div
                className="max-w-3xl space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
            >
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-4xl font-bold tracking-tight"
                >
                    {t`Projects`}
                </motion.h1 >

                <ScrollArea hideScrollbar className="h-[calc(100vh-140px)] lg:h-[calc(100vh-88px)]">
                    <motion.div
                        className="max-w-lg rounded-lg bg-background p-6 shadow-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >

                        <SectionBase
                            id="projects"
                            title={() => "teste projects"}

                        />

                    </motion.div>

                </ScrollArea>
            </motion.div >
            
        </>
    )

}