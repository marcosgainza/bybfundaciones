import ftp from "basic-ftp";
import dotenv from "dotenv";

dotenv.config();

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    try {
        console.log("🔌 Conectando a Hostinger...");

        await client.access({
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: process.env.FTP_PASSWORD,
            port: Number(process.env.FTP_PORT) || 21,
            secure: false
        });

        console.log("📂 Directorio actual:");
        console.log(await client.pwd());

        console.log("📤 Subiendo archivos...");

        // Solo cambia de carpeta si FTP_DIR tiene un valor
        const dir = process.env.FTP_DIR?.trim();

        if (dir) {
            await client.ensureDir(dir);
            await client.cd(dir);
        }

        // Limpia el directorio actual
        await client.clearWorkingDir();

        // Sube el contenido de dist
        await client.uploadFromDir("./dist");

        console.log("✅ Deploy terminado correctamente.");

    } catch (err) {
        console.error("❌ Error en el deploy:");
        console.error(err);
    } finally {
        client.close();
    }
}

deploy();