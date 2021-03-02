import fse from "fs-extra";
import path from "path";

export async function configHandler(args: any): Promise<void> {
    // Copy the template config to destination
    try {
        const templates = path.join(__dirname,"../../../_configs/bare.json");
        const newOutPath = path.join(args.out);
        await fse.copy(templates, newOutPath);
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}