# How to Make the Best Brick Texture

There are many ways to make a brick texture, but often times they come out looking very tiled and unrealistic for your game. This method has been the best way I have found to solve that problem (source at the end).

### Part One: The Texture

The first thing that needs to be done is to pick the bricks you want and crop it to a square (e.g. 512x512).
![OrginalBrick](images/brick_mid.png)
Make sure it is seemless by duplicating the layer (Ctrl+J) and going to Filter > Other > Offset and then chose values that are half of your image’s dimensions (512 goes to 256).

This will make the outer edges seamless: __important for a good texture__

Erase the harsh lines in the middle until it looks nice like the image above. Merge the layers (Ctrl+E)

Then create a new layer above the original brick in photoshop for the next step.

### Part Two: Setting Up the Texture for Maya

Draw white squares over ⅓ of the bricks, black over another ⅓, and finally 50% grey over the last ⅓ until it looks something like this:

![ControlBricks](images/CONTROL_bricks.png)

Hide the original brick layer underneath by clicking the eye icon so that you only see the black, white, and grey squares. 

Call it: **CONTROL_bricks.psd**

Next make a lighter version of the original brick, and a darker version by adjusting the levels of the image (Ctrl+L). Save a new version of each so that you now have 3 images.

![LightlBrick](images/brick_light.png) ![OrginalBrick](images/brick_mid.png) ![DarkBrick](images/brick_dark.png)

For the next step, open up Maya. 

### Part Three: Assembling the Texture

These next steps will create a tiling texture that will not look like repetitive garbage. 

Example: 

 ![BadBrick](images/bad_texture.png)

You can clearly see the repetition here, and it looks terrible.

* So, in your hypershade window in Maya, create __3 Ramp Nodes__.

![3Ramps](images/Ramps.png)

Go to the attribute editor of the first Ramp.

For the first one, we’ll have the black on the right, and white on the left at the __selected position: 0.3__.

![Ramp1](images/Ramp1.png)

The second one will have white in the middle starting at 0.3 and ending at 0.6.

![Ramp2](images/Ramp2.png)

The third will be like the first, but instead, the selected position will be 0.6 and ends at 1.0.

![Ramp3](images/Ramp3.png)

*  Create a new file node in the hypershade: **file1**.

![File1](images/File.png)

Select CONTROL_bricks as file1’s image.

![File1_Image](images/image_on_file1.png)

Attach file1 to the first Ramp by middle mouse clicking and dragging it over. 

Select other and the connection editor will appear. 

Choose outColor, then OutcolorR on the left side. On the right side select uvCoord, then vcoord.

![Connection_Editor](images/connection_editor.png)

Do this for all the ramps. 

It will look something like this:

![connectedRamps](images/connected_ramps.png)

* Create Three more File nodes and select each of the brick textures as their images: dark, light, and original.

Now create three of these (Multiply Divide): 

![Multiply](images/multiply.png)

Attach one Ramp to each Multiply my middle mouse clicking and dragging. When the menu appears, select *input1*. Attach the brick files and select *input2*.

![connected_multiplies](images/multiplies.png)

* Now create a Layered Texture: 

![LayeredTexture](images/Layered.png)

There will be a green box in the attribute editor. Click the smaller one underneath it to create two more boxes for a total of three.

Drag the first Multiply Node on to the Layered and select *inputs[n].color>[1]*.

Do the same for the other two, selecting [2] and [3].

Change the blend mode of each to __add__.

![Blend_Mode](images/Blend_Mode_Add.png)

* Create a Lambert.

Middle mouse click and drag the Layered Texture to the Lambert and select Color in the menu.

It’s all connected. 

* Create a Polycube and apply the lambert by middle mouse dragging to see how it looks. 

It might not looks quite right yet. 

Go into each place2Dtexture node and change the UV tiling to 6.

![2DTexture](images/2DTextureNode.png)

To add another layer to the texture create a 3D texture: __Cloud__

![Cloud](images/cloud.png)

Attach it to the Layered Texture just like the Multiplies before. Set its blending mode to __subtract__. 

Now you should have some nice bricks! Feel free to add a bump map to enhance it even more by adding it to the Lambert Attributes.

**Here’s your texture!**

![GoodBrick](images/finished.png)

Source: http://mayazest.blogspot.com/2011/09/creating-realistic-bricks-and-randomly.html
