1. canvas :- this is the main container for the 3d scene it creates a canvas element in the dom and webgl context for rendering the 3d scene

2. mesh :- in react tree fiber objects are referred as meshes
   it contains 2 parts geometry and material

   > geometry :- defines the shape of the mesh
   > material :- defines the appearance of the mesh

3. geometry of meshes consists of vertices and segments

   > the more segments and vertices the smoother the mesh

4. various geometry types :-

   > sphereGeometry
   > boxGeometry

5. various material types :-

   > meshBasicMaterial
   > meshStandardMaterial

6. animations happen using a mechanism called the render loop

7. lights :-

   > ambientLight :- provides a base level of light to the scene
   > directionalLight :- provides a directional light to the scene
   > pointLight :- provides a point light to the scene
   > spotLight :- provides a spot light to the scene

8. primitive :- primitive is a component that renders a mesh from a geometry and material
