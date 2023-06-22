using Serenity.ComponentModel;

namespace SerenePoC.Default.Forms;

[FormScript("Default.Genre")]
[BasedOnRow(typeof(GenreRow), CheckNames = true)]
public class GenreForm
{
    public string Name { get; set; }
}