import HeightMap, { HeightMapPosition } from "./HeightMap"
import Point from "./coordinates/Point";
import DIRECTION_OFFSETS from "./directions/DIRECTION_OFFSETS"

export default class RoomMap {
	private rows: number
	private columns: number

	private heightMap: HeightMap

	public constructor(map: string[]) {
		this.generateMap(map)
	}

	public generateMap(map: string[]): void {
		this.rows = this.getRowLength(map)
		this.columns = this.getColumnLength(map)

		this.heightMap = this.getHeightMap(map)
	}

	private getRowLength(map: string[]): number {
		return map.length
	}

	private getColumnLength(map: string[]): number {
		const largestColumn =  map.reduce((a, b): string => a.length > b.length ? a : b)

		return largestColumn.length
	}

	private getHeightMap(map: string[]): HeightMap {
		const tiles: HeightMapPosition[] = []

		// The row is the Y point cause the drawing starts from the
		// top corner instead of the bottom one.
		map.forEach((row, y): void => {
			[...row].forEach((height, x): void => {
				const intHeight = this.getHeightByChar(height)

				if (intHeight !== -1) {
					tiles.push({ x, y, height: this.getHeightByChar(height) })
				}
			})
		})

		return { tilePositions: tiles }
	}

	private getHeightByChar(char: string): number {
		// Max of 30 height
		return '0123456789abcdefghijklmnopqrst'.indexOf(char)
	}

	public getTilePositionAt(x: number, y: number): HeightMapPosition | undefined {
		return this.heightMap.tilePositions.find((t): boolean => t.x === x && t.y === y)
	}

	public getTilePositionsAround(x: number, y: number): HeightMapPosition[] {
		const tilePositions: HeightMapPosition[] = []
		const tilePosition = this.getTilePositionAt(x, y)

		if (!tilePosition) return []

		for(const directionOffset of DIRECTION_OFFSETS) {
			const tileAround = this.getTilePositionAt(x + directionOffset.x, y + directionOffset.y)

			tilePositions.push(tileAround)
		}

		return tilePositions
	}

	public get tilePositions(): HeightMapPosition[] {
		return this.heightMap.tilePositions
	}
}