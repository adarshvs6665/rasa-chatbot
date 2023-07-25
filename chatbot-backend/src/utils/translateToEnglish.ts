import fs from "fs";
import translate from "translate-google";
import {config} from './config'

const translateToEnglish = async (input: string) => {
    return await translate(
        input,
        { to: 'en' }
    )
        .then((res: any) => {
            console.log(res);
            return(res);
        })
        .catch((err: any) => {
            return config.translationErrorCode
        });
}

export default translateToEnglish