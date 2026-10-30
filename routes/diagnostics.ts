import { execSync } from 'node:child_process'
import { type Request, type Response } from 'express'

export function systemDiagnostics () {
 return (req: Request, res: Response) => {
   const host = String(req.query.host ?? '127.0.0.1')
   const output = execSync(`ping -c 1 ${host}`).toString()
   res.status(200).json({ status: 'ok', output })
 }
}
