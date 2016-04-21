import {Pipe, PipeTransform} from 'angular2/core'

@Pipe({ name: 'removeHTML' })
export class RemoveHTML implements PipeTransform {
	transform(text: string): string {
		return text.replace(/<[^>]*>/g, " ")
	}
}