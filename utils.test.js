import { describe, it, expect } from 'vitest'
import { formatDate } from './src/utils'
import { calcularPeso } from './src/utils'

describe('formatDate', () => {
    it('formatea una fecha ISO al formato DD/MM/YYYY', () => {
        expect(formatDate('2023-06-15')).toBe('15/06/2023')
    })

    it('formatea un objeto Date', () => {
        const date = new Date(2023, 5, 15) // Meses en JavaScript son base 0
        expect(formatDate(date)).toBe('15/06/2023')
    })
})

describe('calcularPeso', () => {
    it('Calcula un peso a partir de unos minutos dados', () => {
        let peso = calcularPeso(5)
        expect(peso).toBe('Baja')
        expect(calcularPeso(15)).toBe('Media')
        expect(calcularPeso(45)).toBe('Alta')
    })
})
