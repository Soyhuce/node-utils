import { Command, Flags } from '@oclif/core'
import { openapiToTs } from '@soyhuce/openapi-to-ts'

export default class MakeTypes extends Command {
  static description = 'Generate types from openapi file'

  static examples = [
    `$ soyhuce make-types`,
    `$ soyhuce make-types -i ./openapi/openapi.yaml -o ./types/index.ts`
  ]

  static flags = {
    input: Flags.string({
      description: 'The path to openapi file',
      required: false,
      default: './openapi.yaml',
      char: 'i'
    }),
    output: Flags.string({
      description: 'The path to output file',
      required: false,
      default: './types.ts',
      char: 'o'
    })
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(MakeTypes)
    openapiToTs(flags.input, flags.output, {})
  }
}
