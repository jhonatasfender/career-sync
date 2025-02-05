import { Helmet } from "react-helmet-async"
import { SummarySection } from "../../builder/sidebars/left/sections/summary"
import { t } from "@lingui/macro"
import { motion } from "framer-motion";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export const SummaryPage = () => {
    return (
        <>
            <Helmet>
                <title>
                    {t`Summary`} {t`Reative Resume`}
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
                    {t`Summary`}
                </motion.h1 >

                <ScrollArea className="h-[calc(100vh-140px)] lg:h-[calc(100vh-88px)]">
                    <motion.div
                        className="max-w-lg rounded-lg bg-background p-6 shadow-sm"     
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <SummarySection />
                    </motion.div>
                </ScrollArea>
            </motion.div >

        </>
    );
};

