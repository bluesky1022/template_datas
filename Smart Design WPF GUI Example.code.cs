<!-- MainWindow.xaml -->
<Window x:Class="SmartDesignWpf.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="Smart Design WPF GUI" Height="450" Width="800"
        Background="#f0f2f5"
        WindowStartupLocation="CenterScreen">

  <Window.Resources>
    <!-- Button Style with Hover Animation -->
    <Style TargetType="Button" x:Key="ModernButton">
      <Setter Property="Background" Value="#4a90e2"/>
      <Setter Property="Foreground" Value="White"/>
      <Setter Property="FontWeight" Value="SemiBold"/>
      <Setter Property="Padding" Value="12,6"/>
      <Setter Property="BorderThickness" Value="0"/>
      <Setter Property="Cursor" Value="Hand"/>
      <Setter Property="CornerRadius" Value="6"/>
      <Setter Property="Template">
        <Setter.Value>
          <ControlTemplate TargetType="Button">
            <Border Background="{TemplateBinding Background}"
                    CornerRadius="6"
                    SnapsToDevicePixels="True">
              <ContentPresenter HorizontalAlignment="Center" VerticalAlignment="Center"/>
            </Border>
            <ControlTemplate.Triggers>
              <Trigger Property="IsMouseOver" Value="True">
                <Setter Property="Background" Value="#357ABD"/>
              </Trigger>
              <Trigger Property="IsPressed" Value="True">
                <Setter Property="Background" Value="#2C5AA0"/>
              </Trigger>
              <Trigger Property="IsEnabled" Value="False">
                <Setter Property="Background" Value="#A0A0A0"/>
              </Trigger>
            </ControlTemplate.Triggers>
          </ControlTemplate>
        </Setter.Value>
      </Setter>
    </Style>

    <!-- TextBox Style -->
    <Style TargetType="TextBox" x:Key="ModernTextBox">
      <Setter Property="Background" Value="White"/>
      <Setter Property="BorderBrush" Value="#ccc"/>
      <Setter Property="BorderThickness" Value="1"/>
      <Setter Property="Padding" Value="8"/>
      <Setter Property="FontSize" Value="14"/>
      <Setter Property="Margin" Value="0,4,0,4"/>
      <Setter Property="VerticalContentAlignment" Value="Center"/>
      <Setter Property="SnapsToDevicePixels" Value="True"/>
      <Setter Property="Template">
        <Setter.Value>
          <ControlTemplate TargetType="TextBox">
            <Border Background="{TemplateBinding Background}"
                    BorderBrush="{TemplateBinding BorderBrush}"
                    BorderThickness="{TemplateBinding BorderThickness}"
                    CornerRadius="6">
              <ScrollViewer Margin="0" x:Name="PART_ContentHost"/>
            </Border>
            <ControlTemplate.Triggers>
              <Trigger Property="IsKeyboardFocused" Value="True">
                <Setter Property="BorderBrush" Value="#4a90e2"/>
              </Trigger>
            </ControlTemplate.Triggers>
          </ControlTemplate>
        </Setter.Value>
      </Setter>
    </Style>

  </Window.Resources>

  <Grid Margin="24">
    <Grid.RowDefinitions>
      <RowDefinition Height="Auto"/>
      <RowDefinition Height="*"/>
    </Grid.RowDefinitions>

    <!-- Header -->
    <TextBlock Text="Smart Design WPF GUI"
               FontSize="28"
               FontWeight="Bold"
               Foreground="#333"
               Margin="0,0,0,24"/>

    <!-- Content -->
    <Grid Grid.Row="1">
      <Grid.ColumnDefinitions>
        <ColumnDefinition Width="2*"/>
        <ColumnDefinition Width="3*"/>
      </Grid.ColumnDefinitions>

      <!-- Form Panel -->
      <StackPanel Grid.Column="0" Background="White" Padding="24" CornerRadius="12" 
                  Effect="{DynamicResource {x:Static SystemParameters.DropShadowKey}}">
        <TextBlock Text="Login" FontSize="22" FontWeight="SemiBold" Margin="0,0,0,12"/>
        <TextBox Style="{StaticResource ModernTextBox}" PlaceholderText="Username"/>
        <TextBox Style="{StaticResource ModernTextBox}" PlaceholderText="Password" 
                 Margin="0,0,0,24" 
                 PasswordChar="●"/>
        <Button Style="{StaticResource ModernButton}" Content="Sign In" Width="100" HorizontalAlignment="Left"/>
      </StackPanel>

      <!-- Info Panel -->
      <Border Grid.Column="1" Background="#4a90e2" CornerRadius="12" Padding="24" Margin="24,0,0,0">
        <StackPanel VerticalAlignment="Center" HorizontalAlignment="Center">
          <TextBlock Text="Welcome Back!" FontSize="28" FontWeight="Bold" Foreground="White" Margin="0,0,0,12"/>
          <TextBlock Text="Enter your credentials to access your account and continue your work seamlessly."
                     FontSize="16" Foreground="White" TextWrapping="Wrap" Width="280"/>
        </StackPanel>
      </Border>
    </Grid>
  </Grid>
</Window>
```

---

### Explanation:

- The window uses a soft background color and centers the content with margins.
- The form panel uses a white background with rounded corners and a subtle shadow (you can add a shadow effect in code-behind or with drop shadow resources).
- Buttons and textboxes have custom styles for a modern flat design with smooth hover and focus effects.
- The layout uses Grid and StackPanel to create a responsive two-column layout.
- The right panel uses a solid accent color with white text and welcoming message.

---

### Tips for a smart WPF GUI:

1. **Use MVVM pattern:** Separate UI (XAML) from logic (ViewModel) for maintainability.
2. **Use Styles and Templates:** Avoid repetition and keep UI consistent.
3. **Responsive Layout:** Use `Grid`, `DockPanel`, `StackPanel` smartly and avoid fixed sizes.
4. **Animations:** Subtle animations improve user experience.
5. **Use Modern Controls:** Consider third-party libraries like MahApps.Metro or MaterialDesignInXAML for richer UI components.

If you want, I can help generate a full MVVM example or add advanced features like themes or animations!