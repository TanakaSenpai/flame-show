import { z } from "zod";

const schema = z.object({
    name: z.string(),
    productCode: z.string()
})

export default schema;
