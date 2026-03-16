matriz_personas =[]

# 1. Entrada de datos
while True:
    nombre = input("Nombre (o 'finalizar' / 'terminado'): ")
    if nombre.lower() in ['finalizar', 'terminado']:
        break
    
    edad = int(input("Edad: "))
    nota = float(input("Nota: "))
    
    matriz_personas.append([nombre, edad, nota])

if matriz_personas:
    # 2. Salida: Lista original
    print("\n--- Lista Original ---")
    for p in matriz_personas:
        print(f"Nombre: {p[0]}, Edad: {p[1]}, Nota: {p[2]}")

    # 3. Salida: Lista ordenada por nota
    print("\n--- Ordenado por Nota de Mayor a Menor ---")
    personas_ordenadas = sorted(matriz_personas, key=lambda x: x[2], reverse=True)
    for p in personas_ordenadas:
        print(f"Nombre: {p[0]}, Edad: {p[1]}, Nota: {p[2]}")

    # 4. Salida: Promedio
    print("\n--- Promedio General ---")
    promedio = sum(p[2] for p in matriz_personas) / len(matriz_personas)
    print(f"Promedio: {promedio}")