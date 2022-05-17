#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[tauri::command]
fn my_custom_command() {
    println!("I was invoked from JS!");
}

#[tauri::command]
fn show_my_city(city: String) {
    println!("This is my city: {}", city)
}

#[tauri::command]
fn add_two_numbers(a: i32, b: i32) -> i32 {
    let result: i32 = a + b;
    println!("{} + {}: {}", a, b, result);
    result
}

#[tauri::command]
fn command_could_fail() -> Result<String, String> {
    // If something fails
    Err("This failed!".into())
    // If it worked
    // Ok("This worked!".into())
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            my_custom_command,
            show_my_city,
            add_two_numbers,
            command_could_fail
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
