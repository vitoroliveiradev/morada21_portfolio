import { ref, listAll, getDownloadURL, list } from "firebase/storage";
import { storage } from "../firebase"; // Certifique-se de importar sua configuração

export const getFiles = async (folderPath) => {
  // Referencie a pasta no Firebase Storage
  const folderRef = ref(storage, folderPath);

  try {
    // Liste todos os arquivos na pasta
    const result = await listAll(folderRef);

    // Obtenha as URLs de download de cada arquivo
    const files = await Promise.all(
      result.items.map(async (item) => {
        const url = await getDownloadURL(item);
        return { name: item.name, url };
      })
    );

    return files;
  } catch (error) {
    console.error("Erro ao listar arquivos na pasta:", error);
    throw error;
  }
};
